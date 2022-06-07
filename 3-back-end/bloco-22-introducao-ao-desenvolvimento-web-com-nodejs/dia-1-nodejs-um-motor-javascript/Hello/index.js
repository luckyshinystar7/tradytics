const readline = require('readline-sync');

console.log('Hello, world!');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Bem vindo, ${name}! Você não é tão velho, ${age} é o novo 18!`);