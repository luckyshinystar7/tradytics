// 3. Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;

  if (age < 18) return res.status(401).json({ message: 'Unauthorized' })

  res.status(200).json({ message: `Hello, ${name}` })
})

app.listen(3001, () => {
  console.log('Ativo na porta 3001');
});
