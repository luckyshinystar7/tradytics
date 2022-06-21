// 5. Crie uma API de dados das personagens de Simpsons 🚀
// Crie um arquivo chamado simpsons.json e popule
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie.
const express = require('express');
const app = express();
const fs = require('fs/promises');
const path = require('path');

app.use(express.json());

const filePath = path.join(__dirname, 'simpsons.json');

const getSimpsons = () => {
  const simpList = fs.readFile(filePath, 'utf8');
  return simpList
};

// 6. Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.

app.get('/', async function (_req, res) {
  try {
    const simpsons = await getSimpsons();
    res.status(200).json(JSON.parse(simpsons))

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
});

app.listen(3001, () => {
  console.log('Ativo na porta 3001');
});
