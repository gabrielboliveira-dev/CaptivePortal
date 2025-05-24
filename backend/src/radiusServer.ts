// src/radiusServer.ts

// >>>>>>> ESSA É A IMPORTAÇÃO MAIS PROVÁVEL PARA O PACOTE 'RADIUS' <<<<<<<
// Importamos 'createServer' diretamente como a exportação PADRÃO do módulo 'radius'.
// As outras funções (como 'encode_response') são muitas vezes propriedades dessa função padrão.
import createServer from 'radius';

// Importamos os tipos específicos que o TypeScript precisa para entender
// o formato dos pacotes RADIUS ('RadiusPacket') e as informações do remetente ('RemoteInfo').
import { RadiusPacket } from 'radius';
import { RemoteInfo } from 'dgram'; // 'dgram' é um módulo nativo do Node.js para UDP

// Importamos o PrismaClient para podermos interagir com o nosso banco de dados.
import { PrismaClient } from '@prisma/client';

// Criamos uma nova instância do Prisma para usar em todo o arquivo.
const prisma = new PrismaClient();

// A CHAVE SECRETA DO RADIUS:
// Essa variável precisa ser EXATAMENTE IGUAL à "Shared Secret" que você configurar no seu AP 360.
// É a senha que o AP e o servidor RADIUS usam para se autenticar.
// É uma boa prática pegá-la de uma variável de ambiente (process.env.RADIUS_SECRET).
const RADIUS_SECRET = process.env.RADIUS_SECRET || 'SUA_SENHA_MUITO_SEGURA_NO_ENV'; // LEMBRE-SE DE MUDAR ISSO NO SEU .env!

// A porta em que o servidor RADIUS vai "escutar" por requisições do AP.
// A porta padrão para autenticação RADIUS é 1812.
const RADIUS_PORT = parseInt(process.env.RADIUS_PORT || '1812');

// ===========================================================================
// CRIAÇÃO E LÓGICA DO SERVIDOR RADIUS
// ===========================================================================

// Chamamos 'createServer' DIRETAMENTE, pois ele é a exportação padrão do módulo.
// Definimos os tipos para 'packet' (RadiusPacket) e 'rinfo' (RemoteInfo).
const server = createServer(async (packet: RadiusPacket, rinfo: RemoteInfo) => { 
    console.log(`[RADIUS] Recebemos uma mensagem do roteador de ${rinfo.address}:${rinfo.port}`);

    if (packet.code === 'Access-Request') {
        const callingStationId = packet.attributes['Calling-Station-Id'] || packet.attributes['User-Name'] || 'cliente_desconhecido_radius';
        console.log(`[RADIUS] Pedido de acesso para o cliente: ${callingStationId}`);

        let accessGranted = false;

        try {
            const acceptedClient = await prisma.acceptedTerm.findFirst({
                where: {
                    clientId: callingStationId
                }
            });

            if (acceptedClient) {
                accessGranted = true;
                console.log(`[RADIUS] Cliente ${callingStationId} encontrado no banco. Liberando acesso.`);
            } else {
                console.log(`[RADIUS] Cliente ${callingStationId} NÃO encontrado no banco. Negando acesso.`);
            }

        } catch (error) {
            console.error('[RADIUS] ERRO ao consultar o banco de dados:', error);
            accessGranted = false;
        }

        const responseCode = accessGranted ? 'Access-Accept' : 'Access-Reject';

        // Usamos 'createServer.encode_response' porque 'encode_response' é uma propriedade da função 'createServer'.
        const response = (createServer as any).encode_response({ // Usamos 'as any' para garantir que o TS não reclame.
            packet: packet,
            code: responseCode,
            secret: RADIUS_SECRET
        });

        server.send(response, rinfo.port, rinfo.address, (err: Error | null) => {
            if (err) {
                console.error('[RADIUS] ERRO ao enviar resposta RADIUS:', err);
            } else {
                console.log(`[RADIUS] Resposta '${responseCode}' enviada para ${rinfo.address}`);
            }
        });

    } else if (packet.code === 'Accounting-Request') {
        console.log(`[RADIUS] Requisição de Contabilidade (Accounting-Request) de ${rinfo.address}`);
        // Usamos 'createServer.encode_response' novamente.
        const response = (createServer as any).encode_response({ // Usamos 'as any' para garantir que o TS não reclame.
            packet: packet,
            code: 'Accounting-Response',
            secret: RADIUS_SECRET
        });
        server.send(response, rinfo.port, rinfo.address, (err: Error | null) => {
            if (err) console.error('[RADIUS] ERRO ao enviar resposta de contabilidade:', err);
        });
    } else {
        console.log(`[RADIUS] Pacote RADIUS inesperado recebido: ${packet.code}`);
    }
});

// ===========================================================================
// INICIALIZAÇÃO DO SERVIDOR RADIUS
// ===========================================================================

server.on('error', (err: Error) => {
    console.error('[RADIUS] ERRO GERAL no servidor RADIUS:', err);
});

server.bind(RADIUS_PORT, () => {
    console.log(`[RADIUS] Servidor RADIUS rodando e escutando na porta ${RADIUS_PORT}!`);
});

export default server;