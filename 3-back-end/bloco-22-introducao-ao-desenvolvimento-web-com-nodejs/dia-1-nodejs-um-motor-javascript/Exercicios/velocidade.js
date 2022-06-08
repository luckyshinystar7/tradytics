// Ex 06 -  Crie um script para calcular a velocidade média de um carro numa corrida.
//              A fórmula para calcular velocidade média é distância / tempo.
//              Armazene o script no arquivo velocidade.js.
//              Agora, permita que o script seja executado através do comando npm run velocidade. Para isso, crie a chave velocidade dentro do objeto scripts no package.json.
//              Utilize o readline-sync para solicitar os dados à pessoa.
//              Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
const rs = require('readline-sync');

console.log("Olá!! Bem vindo ao calculador de Velocidade do Rubinho");

distancia = rs.questionFloat('Informe a distancia percorrida (km): ');
tempo = rs.questionFloat('Informe o tempo para percorrer (min): ') / 60;

const velocidade = distancia / tempo;
console.log(`Sua velocidade foi de: ${velocidade} km/h`);
