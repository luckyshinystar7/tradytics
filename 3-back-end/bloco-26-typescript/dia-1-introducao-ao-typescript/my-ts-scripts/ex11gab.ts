// ./index.ts (gabarito)

import readline from "readline-sync"; // importamos o pacote readline-sync

// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./ex10gab" }, //FUNCIONANDO APENAS NESSA OPÇÃO - finalizar ex10 para utilizar todas opções
    { name: "Converter massa", script: "./ex06gab" },
    { name: "Converter capacidade", script: "./ex07gab" },
    { name: "Converter área", script: "./ex08gab" },
    { name: "Converter volume", script: "./ex09gab" }
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script); // executamos o script escolhido usando o require