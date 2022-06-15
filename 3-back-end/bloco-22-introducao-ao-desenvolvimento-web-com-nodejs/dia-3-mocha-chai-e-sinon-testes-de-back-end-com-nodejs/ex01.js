/* Exercício 1: Fazendo uso de mocha e chai, estruture os testes para uma função que vai dizer se um número é "positivo", "negativo" ou "neutro":
    Essa função vai receber um número como parâmetro e retornar uma string como resposta;
    Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
    1.1 Descreva todos os cenário de teste utilizando describes;
    1.2 Descreva todos os testes que serão feitos utilizando its;
    1.3 Crie as asserções validando se os retornos de cada cenário têm o tipo e o valor esperado. */

const defineNumber = (number) => {
  if (number > 0 ) return 'positivo';
  if (number < 0 ) return 'negativo';
  if (number === 0 ) return 'neutro';
};

// console.log(defineNumber(10));
// console.log(defineNumber(0));
// console.log(defineNumber(-10));

module.exports = defineNumber;
