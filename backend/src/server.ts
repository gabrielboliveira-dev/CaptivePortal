import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para parsear JSON bodies

app.get('/', (req, res) => {
  res.send('Backend do Captive Portal está rodando!');
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});