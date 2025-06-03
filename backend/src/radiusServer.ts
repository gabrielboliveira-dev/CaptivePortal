import * as dgram from 'dgram';
import { RadiusPacket } from 'radius';
import { RemoteInfo } from 'dgram';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const RADIUS_SECRET = process.env.RADIUS_SECRET || 'SUA_SENHA_MUITO_SEGURA_NO_ENV';
const RADIUS_PORT = parseInt(process.env.RADIUS_PORT || '1812');

const radius: any = require('radius'); 
const server = dgram.createSocket('udp4'); 

server.on('message', async (msg: Buffer, rinfo: RemoteInfo) => {
    console.log(`[RADIUS] Recebemos uma mensagem UDP do roteador de ${rinfo.address}:${rinfo.port}`);

    let packet: RadiusPacket;
    try {
        packet = radius.decode({ packet: msg, secret: RADIUS_SECRET });
    } catch (err) {
        console.error(`[RADIUS] ERRO ao decodificar pacote RADIUS de ${rinfo.address}:`, err);
        return;
    }

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

        const response = radius.encode_response({
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
        const response = radius.encode_response({
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

server.on('error', (err: Error) => {
    console.error('[RADIUS] ERRO GERAL no servidor UDP/RADIUS:', err);
    server.close();
});

server.on('listening', () => {
    const address = server.address();
    console.log(`[RADIUS] Servidor RADIUS rodando e escutando na porta ${address.port} no endereço ${address.address}!`);
});

server.bind(RADIUS_PORT, '0.0.0.0');

export default server;