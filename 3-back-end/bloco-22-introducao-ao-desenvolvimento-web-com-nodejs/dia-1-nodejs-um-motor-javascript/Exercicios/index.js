const rs = require('readline-sync');
const imc = require('./imc.js');
const velocidade = require('./velocidade.js');
const sorteio = require('./sorteio.js');

animals = ['IMC - Nimbus 2000', 'Velocidade do Rubinho', 'Sorteio Maedina'],
    index = rs.keyInSelect(animals, 'Qual programa voce quer rodar?');

switch (index) {
    case 0:
        imc();
        break;
    case 1:
        velocidade();
        break;
    case 2:
        sorteio();
        break;
    default:
        console.log('Nada? Fica pra proxima entao.');
        break;
}