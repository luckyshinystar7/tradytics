// 5. Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
//     Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
//     Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
//     Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
//     O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!.

const list = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const fs = require('fs/promises');

const createFiles = async () => {
  let myText = '';
  const promises = list.map((text, index) => {
    fs.writeFile(`file${index + 1}.txt`, text);
    myText = myText + ' ' + text;
  });
  Promise.all(promises);
  console.log(myText);

  let myWholeString = '';
  for (let i = 1; i < 5; i++) {
    const myString = await fs.readFile(`file${i}.txt`, 'utf8');
    myWholeString = myWholeString + ' ' + myString;    
  }
  fs.writeFile('fileAll.txt', myWholeString);
};

createFiles();