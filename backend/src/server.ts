import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import './radiusServer'; 

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } 
  next();
}) as express.RequestHandler);

app.post('/api/accept-terms', async (req, res) => {
  console.log('Teste para eu ver se recebemos um pedido de aceite de termos!');
    const clientId = req.body.clientId || req.ip || 'cliente_desconhecido_web';

  try {
    await prisma.acceptedTerm.create({
      data: {
        clientId: clientId,
      },
    });
    console.log(`Termos aceitos pelo cliente: ${clientId}`);

    res.json({ success: true, message: 'Termos aceitos e registro salvo.' });

  } catch (error) {
    console.error('Erro ao salvar aceite dos termos:', error);
    res.status(500).json({ success: false, message: 'Erro interno ao processar o aceite.' });
  }
});

app.listen(port, () => {
  console.log(`Backend Express rodando em http://localhost:${port}`);
});