// Para os próximos exercícios, faremos uso de um módulo chamado readline, principalmente de seu método readline.question().
// Ele provê uma interface de leitura de dados inserida no terminal. Para mais informações, consulte a documentação: https://nodejs.org/api/readline.html
//   6. Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
//     6.1 Pergunte à pessoa usuária qual arquivo ela deseja ler.
//     6.2 Leia o arquivo indicado.
//     6.3 Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
//     6.4 Caso o arquivo exista, escreva seu conteúdo na tela.

const fs = require('fs/promises');
const readline = require('readline-sync');

const file = readline.question('Qual arquivo voce quer ler? ');

async function fileReader(file) {
  try {
    const content = await fs.readFile(file, 'utf8');
    if (!content) throw new Error('Arquivo inexistente');
    console.log(content);

  } catch (error) {
    console.log(`Não foi possível ler o arquivo desejado. ${error}`);
  }
};
fileReader(file);
