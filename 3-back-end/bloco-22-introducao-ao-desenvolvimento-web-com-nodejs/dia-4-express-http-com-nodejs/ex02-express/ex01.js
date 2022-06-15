// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

const express = require('express');
const app = express();

app.get('/ping', function (_req, res) {
  res.json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log('ativo na porta 3001');
});
