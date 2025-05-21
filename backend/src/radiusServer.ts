import { createServer, encode_response } from 'radius';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const RADIUS_SECRET = process.env.RADIUS_SECRET || 'senha_altamente_secreta_kkkkkkk';
const RADIUS_PORT = parseInt(process.env.RADIUS_PORT || '1812');

const server = createServer(async (packet, rinfo) => {

    console.log(`[RADIUS] Recebemos uma mensagem do roteador de ${rinfo.address}:${rinfo.port}`);
    // console.log('O pacote RADIUS completo (descomente pra ver em debug):', JSON.stringify(packet, null, 2));

    // O roteador pode nos mandar diferentes tipos de mensagens (códigos).
    // O mais importante pra gente agora é 'Access-Request'.
    if (packet.code === 'Access-Request') {
        // Isso significa: "Olá, AP RADIUS! Eu tenho um cliente aqui que quer internet.
        // Ele pode ter acesso? Me diz 'sim' ou 'não'!"

        // A gente precisa descobrir QUEM é esse cliente.
        // O roteador geralmente manda o MAC (endereço físico) do aparelho do cliente
        // no atributo 'Calling-Station-Id'. Às vezes pode ser 'User-Name' ou outro.
        // A gente tenta pegar o MAC ou um valor padrão se não achar.
        const callingStationId = packet.attributes['Calling-Station-Id'] || packet.attributes['User-Name'] || 'cliente_desconhecido_radius';
        console.log(`[RADIUS] Pedido de acesso para o cliente: ${callingStationId}`);

        let accessGranted = false; // Por padrão, a gente não vai dar acesso, só se tiver certeza!

        try {
            // Agora, vamos no nosso banco de dados (usando o Prisma) e ver se esse 'callingStationId'
            // (que é o MAC/IP do cliente) já foi registrado como alguém que "Aceitou os Termos".
            const acceptedClient = await prisma.acceptedTerm.findFirst({
                where: {
                    clientId: callingStationId // Procuramos na nossa tabela 'AcceptedTerm' por esse ID
                }
            });

            // Se a gente encontrou um registro, significa que ele já aceitou!
            if (acceptedClient) {
                accessGranted = true; // Oba! Pode dar acesso!
                console.log(`[RADIUS] Cliente ${callingStationId} encontrado no banco. Liberando acesso.`);
            } else {
                console.log(`[RADIUS] Cliente ${callingStationId} NÃO encontrado no banco. Negando acesso.`);
            }

        } catch (error) {
            // Se der algum erro ao falar com o banco de dados (tipo o banco parou),
            // a gente imprime o erro e, por segurança, não dá acesso.
            console.error('[RADIUS] ERRO ao consultar o banco de dados:', error);
            accessGranted = false;
        }

        // ===============================================================
        // MONTANDO A RESPOSTA PARA O ROTEADOR (AP)
        // ===============================================================

        // Se a gente deu acesso (accessGranted for true), a resposta é 'Access-Accept'.
        // Senão, é 'Access-Reject'.
        const responseCode = accessGranted ? 'Access-Accept' : 'Access-Reject';

        // Usamos a função 'encode_response' do pacote 'radius' pra criar a mensagem de resposta.
        const response = encode_response({
            packet: packet, // A gente usa o pacote original que o roteador mandou
            code: responseCode, // Dizemos se aceita ou nega
            secret: RADIUS_SECRET // E nossa chave secreta de novo!
        });

        // Agora, a gente manda essa resposta de volta pro roteador!
        server.send(response, rinfo.port, rinfo.address, (err) => {
            if (err) {
                console.error('[RADIUS] ERRO ao enviar resposta para o roteador:', err);
            } else {
                console.log(`[RADIUS] Resposta '${responseCode}' enviada para ${rinfo.address}`);
            }
        });

    } else if (packet.code === 'Accounting-Request') {
        // Esse tipo de mensagem é quando o roteador nos avisa que uma sessão começou ou terminou.
        // É para "contabilidade" (Accounting). A gente só responde que "ok, recebemos".
        console.log(`[RADIUS] Requisição de Contabilidade (Accounting-Request) de ${rinfo.address}`);
        // Futuramente, a gente pode guardar essas informações no banco pra saber quanto tempo o cliente usou a internet.
        const response = encode_response({
            packet: packet,
            code: 'Accounting-Response',
            secret: RADIUS_SECRET
        });
        server.send(response, rinfo.port, rinfo.address, (err) => {
            if (err) console.error('[RADIUS] ERRO ao enviar resposta de contabilidade:', err);
        });
    } else {
        // Se o roteador mandar um tipo de mensagem que a gente não conhece,
        // a gente só avisa no console.
        console.log(`[RADIUS] Pacote RADIUS inesperado recebido: ${packet.code}`);
    }
});

// ===========================================================================
// INICIANDO O SERVIDOR RADIUS
// ===========================================================================

// Isso aqui é importante! Se der algum erro no nosso servidor RADIUS,
// a gente quer ver ele no console pra poder corrigir.
server.on('error', (err) => {
    console.error('[RADIUS] ERRO GERAL no servidor RADIUS:', err);
});

// A gente manda o servidor RADIUS "começar a escutar" na porta que definimos (1812).
server.bind(RADIUS_PORT, () => {
    console.log(`[RADIUS] Servidor RADIUS rodando e escutando na porta ${RADIUS_PORT}!`);
});

// Exportamos o servidor RADIUS pra que o nosso arquivo principal (server.ts)
// possa "ligar" ele quando a aplicação Node.js iniciar.
export default server;