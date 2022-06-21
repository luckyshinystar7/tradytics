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

app.get('/simpsons', async function (_req, res) {
  try {
    const simpsons = await getSimpsons();
    res.status(200).json(JSON.parse(simpsons))

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
});

// 7. Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.

app.get('/simpsons/:id', async function (req, res) {
  const id = req.params.id;
  const simpsons = await getSimpsons();
  const parsedSimpsons = await JSON.parse(simpsons);
  const mySimpson = parsedSimpsons.find((simp) => simp.id === id);

  if (mySimpson) return res.status(200).json(mySimpson);
  return res.status(500).json({ message: 'simpson not found' })
});

// 8.  Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.

const setSimpsons = (simpsons) => {
  return fs.writeFile(filePath, JSON.stringify(simpsons));
};

app.post('/simpsons', async (req, res) => {
  const { id } = req.body;
  const simpsons = await getSimpsons();
  const parsedSimpsons = await JSON.parse(simpsons);
  const mySimpson = parsedSimpsons.find((simp) => simp.id === id);

  if (mySimpson) return res.status(409).json({ message: 'id already exists' });
  else {
    const newSimpsons = [...parsedSimpsons, req.body];
    await setSimpsons(newSimpsons);
    return res.status(204).end();
  }
})

app.listen(3001, () => {
  console.log('Ativo na porta 3001');
});
