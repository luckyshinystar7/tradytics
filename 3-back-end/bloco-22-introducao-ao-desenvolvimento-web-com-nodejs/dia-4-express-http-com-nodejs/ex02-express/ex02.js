// 2. Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

// npm i body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(201).json({message: `Hello, ${name}!`});
});

app.listen(3001, () => {
  console.log('Ativo na porta 3001');
});
