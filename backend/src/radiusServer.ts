import { RadiusPacket } from 'radius';
import { RemoteInfo } from 'dgram'; 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const RADIUS_SECRET = process.env.RADIUS_SECRET || 'SUA_SENHA_MUITO_SEGURA_NO_ENV';
const RADIUS_PORT = parseInt(process.env.RADIUS_PORT || '1812');

const radius: any = require('radius'); 

const server = radius.createServer(async (packet: RadiusPacket, rinfo: RemoteInfo) => {
    console.log(`Recebemos uma mensagem do roteador de ${rinfo.address}:${rinfo.port}`);

    if (packet.code === 'Access-Request') {
        const callingStationId = packet.attributes['Calling-Station-Id'] || packet.attributes['User-Name'] || 'cliente_desconhecido_radius';
        console.log(`Pedido de acesso para o cliente: ${callingStationId}`);

        let accessGranted = false;

        try {
            const acceptedClient = await prisma.acceptedTerm.findFirst({
                where: {
                    clientId: callingStationId
                }
            });

            if (acceptedClient) {
                accessGranted = true;
                console.log(`Cliente ${callingStationId} encontrado no banco. Liberando acesso.`);
            } else {
                console.log(`Cliente ${callingStationId} NÃO encontrado no banco. Negando acesso.`);
            }

        } catch (error) {
            console.error('ERRO ao consultar o banco de dados:', error);
            accessGranted = false;
        }

        const responseCode = accessGranted ? 'Access-Accept' : 'Access-Reject';

        const response = radius.encode_response({
            packet: packet,
            code: responseCode,
            secret: RADIUS_SECRET
        });

        server.send(response, rinfo.port, rinfo.address, (err: Error | null) => {
            if (err) {
                console.error('ERRO ao enviar resposta RADIUS:', err);
            } else {
                console.log(`Resposta '${responseCode}' enviada para ${rinfo.address}`);
            }
        });

    } else if (packet.code === 'Accounting-Request') {
        console.log(`Requisição de Contabilidade (Accounting-Request) de ${rinfo.address}`);
        const response = radius.encode_response({
            packet: packet,
            code: 'Accounting-Response',
            secret: RADIUS_SECRET
        });
        server.send(response, rinfo.port, rinfo.address, (err: Error | null) => {
            if (err) console.error('ERRO ao enviar resposta de contabilidade:', err);
        });
    } else {
        console.log(`Pacote RADIUS inesperado recebido: ${packet.code}`);
    }
});

// ===========================================================================
// INICIALIZAÇÃO DO SERVIDOR RADIUS
// ===========================================================================

server.on('error', (err: Error) => {
    console.error('ERRO GERAL no servidor RADIUS:', err);
});

server.bind(RADIUS_PORT, () => {
    console.log(`Servidor RADIUS rodando e escutando na porta ${RADIUS_PORT}!`);
});

export default server;