// 4. Utilize o arquivo simpsons.json para realizar os requisitos abaixo.
//     Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
//     4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs/promises');
const rs = require('readline-sync');

const simpsonsFile = 'simpsons.json';

// fs.readFile(simpsonsFile, 'utf8')
//   .then((data) => {
//     const simpsonsList = JSON.parse(data);
//     simpsonsList.map(simp => console.log(`${simp.id} - ${simp.name}`));
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${simpsonsFile}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

//     4.2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// npm i readline-sync
// const inputId = rs.questionInt('Informe o ID do personagem desejado: ');

// fs.readFile(simpsonsFile, 'utf8')
//   .then((data) => {
//     const simpsonsList = JSON.parse(data);
//     const mySimp = simpsonsList.find(simp => Number(simp.id) === inputId);
//     //  console.log(`mySimp: ${mySimp}`, mySimp.name, typeof(inputId), typeof(mySimp['id']));
//     console.log(`O simpson selecionado foi: ${mySimp.name}`);
//   })
//   .catch((err) => {
//     console.error(`id ${inputId} não encontrado\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

//  ASYNC / AWAIT SOLUTION

// const inputId = rs.questionInt('Digite o ID do Simpson desejado ');

async function getSimpsonById(id) {
  const simpListRaw = await fs.readFile(simpsonsFile, 'utf8');
  const simpList = JSON.parse(simpListRaw);
  const mySimp = simpList.find(simp => Number(simp.id) === id);
  if (!mySimp) throw new Error('Id não encontrado');
  return mySimp.name;
};

async function showSimp() {
  try {
    const simp = await getSimpsonById(inputId);
    console.log(simp);
  } catch (error) {
    console.log(error);
  }
}

// showSimp();

//     4.3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const removeSimp = async () => {
  try {
    const simpListRaw = await fs.readFile(simpsonsFile, 'utf8');
    const simpList = JSON.parse(simpListRaw);
    const newList = simpList.filter(simp => ((Number(simp.id) != 10) && (Number(simp.id) != 6)));
    await fs.writeFile(simpsonsFile, JSON.stringify(newList));
    console.log('Arquivo alterado com sucesso');
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error}`);
  }
};

// removeSimp();

//     4.4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
const newSimpFile = async () => {
  try {
    const simpListRaw = await fs.readFile(simpsonsFile, 'utf8');
    const simpList = JSON.parse(simpListRaw);
    const newSimpList = simpList.filter(simp => Number(simp.id) <= 4);
    await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpList));
    console.log('Arquivo simpsonFamily.json criado com sucesso');
  } catch (error) {
    console.log(`Erro ao criar o arquivo: ${error}`);
  }
};

// newSimpFile();

//     4.5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addToFamily() {
  try {
    const familyListRaw = await fs.readFile('simpsonFamily.json', 'utf8')
    const familyList = JSON.parse(familyListRaw);
    const simpListRaw = await fs.readFile(simpsonsFile, 'utf8');
    const simpList = JSON.parse(simpListRaw);

    const nelson = simpList.find(simp => simp.name === 'Nelson Muntz');
    const newFamilyList = [...familyList, nelson];

    await fs.writeFile('simpsonFamily.json', JSON.stringify(newFamilyList));
    console.log('Arquivo simpsonFamily.json atualizado com sucesso');
  } catch (error) {
    console.log(`Erro ao atualizar o arquivo: ${error}`);
  }
};
// addToFamily();

//     4.6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const replaceSimp = async () => {
try {
  const familyListRaw = await fs.readFile('simpsonFamily.json', 'utf8');
  const familyList = JSON.parse(familyListRaw);
  const maggie = {"id":"5","name":"Maggie Simpson"};
  
  const newFamilyList = familyList.filter(simp => simp.name !== 'Nelson Muntz');
  const listWithMaggie = [...newFamilyList, maggie];
  await fs.writeFile('simpsonFamily.json', JSON.stringify(listWithMaggie));
  console.log('Arquivo alterado com sucesso');
} catch (error) {
  console.log('Falha ao realizar a requisição', error);
}
};
replaceSimp();
