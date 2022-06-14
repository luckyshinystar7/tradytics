// 7. Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
//     7.1 Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
//     7.2 Leia o arquivo.
//     7.3 Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
//     7.4 Caso o arquivo exista, solicite a palavra a ser substituída.
//     7.5 Solicite a nova palavra, que substituirá a palavra anterior.
//     7.6 Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
//     7.7 Pergunte o nome do arquivo de destino.
//     7.8 Salve o novo arquivo no caminho de destino.

const fs = require('fs/promises');
const readline = require('readline-sync');

const file = readline.question('Qual arquivo voce quer ler? ');

async function fileReader(file) {
  try {
    const content = await fs.readFile(file, 'utf8');
    if (!content) throw new Error('Arquivo inexistente');
    return content;

  } catch (error) {
    console.log(`Não foi possível ler o arquivo desejado. ${error}`);
  }
};

async function wordChanger(file) {
  const myContent = await fileReader(file);
  const toRemove = readline.question('Digite a palavra a ser removida ');
  const toAdd = readline.question('Digite a palavra a ser inserida ');

  const myNewContent = myContent.replace(toRemove, toAdd);
  console.log(myNewContent);

  const newFileName = readline.question('Qual nome deseja dar ao seu novo arquivo? ');

  };

wordChanger(file);
