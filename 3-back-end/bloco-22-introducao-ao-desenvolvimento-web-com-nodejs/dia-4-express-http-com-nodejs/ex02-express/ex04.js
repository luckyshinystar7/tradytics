// 4. Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;
  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.listen(3001, () => {
  console.log('Ativo na porta 3001');
});
