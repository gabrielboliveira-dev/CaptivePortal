// src/server.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import './radiusServer'; 

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

// Middleware para CORS (importante para o frontend Vue)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajustar para o domínio do seu frontend em produção
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.post('/api/accept-terms', async (req, res) => {
  // **IMPORTANTE**: Aqui você precisa obter o identificador do cliente (MAC/IP).
  // Quando o AP 360 redireciona para seu portal, ele PODE enviar o MAC/IP
  // como parâmetro de URL (ex: ?mac=AA:BB:CC:DD:EE:FF).
  // Você precisará capturar isso no frontend e enviar para o backend.
  // Ou, se o AP for inteligente, ele usará o IP de origem da requisição RADIUS.

  const clientId = req.body.clientId || req.ip || 'unknown_client'; // Use req.ip para o IP do cliente conectando ao backend

  try {
    await prisma.acceptedTerm.create({
      data: {
        clientId: clientId,
      },
    });
    console.log(`Termos aceitos pelo cliente: ${clientId}`);

    // A liberação real será feita pelo servidor RADIUS quando o AP o consultar.
    // Aqui, apenas indicamos que o aceite foi processado.
    res.json({ success: true, message: 'Termos aceitos e registro salvo.' });

  } catch (error) {
    console.error('Erro ao salvar aceite dos termos:', error);
    res.status(500).json({ success: false, message: 'Erro interno ao processar o aceite.' });
  }
});

app.listen(port, () => {
  console.log(`Backend Express rodando em http://localhost:${port}`);
});

// Configurações de ambiente para RADIUS
// Adicione no seu arquivo .env:
// RADIUS_SECRET=sua_chave_secreta_aqui_para_o_radius
// RADIUS_PORT=1812