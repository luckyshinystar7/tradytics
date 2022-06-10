const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão escrito com promises o/')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
