import express, { Request, Response, NextFunction } from 'express'; 
import { PrismaClient } from '@prisma/client';
import './radiusServer'; 

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json()); 

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
    next();
});

app.post('/api/accept-terms', async (req: Request, res: Response) => {
    console.log('Recebemos um pedido de aceite de termos!');

    const clientId = req.body.clientId as string | undefined;

    if (!clientId) {
        console.warn('Requisição de aceite de termos sem clientId fornecido.');
        return res.status(400).json({ success: false, message: 'ID do cliente (clientId) é obrigatório.' });
    }

    try {
        await prisma.acceptedTerm.create({
            data: {
                clientId: clientId,
                acceptedAt: new Date(),
            },
        });
        console.log(`Termos aceitos e registrados para o cliente: ${clientId}`);

        return res.status(200).json({ success: true, message: 'Termos aceitos e registro salvo com sucesso.' });

    } catch (error: any) {
        if (error.code === 'P2002' && error.meta?.target?.includes('clientId')) {
            console.warn(`Cliente ${clientId} já havia aceitado os termos.`);
            return res.status(200).json({ success: true, message: 'Termos já aceitos. Você pode acessar a internet.' });
        }

        console.error('Erro ao salvar aceite dos termos:', error);
        return res.status(500).json({ success: false, message: 'Erro interno ao processar o aceite dos termos.' });
    }
});

app.listen(port, () => {
    console.log(`Backend Express rodando em http://localhost:${port}`);
});