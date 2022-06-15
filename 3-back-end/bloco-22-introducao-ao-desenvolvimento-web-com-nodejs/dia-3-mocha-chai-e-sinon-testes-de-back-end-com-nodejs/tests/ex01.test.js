/* Exercício 1: Fazendo uso de mocha e chai, estruture os testes para uma função que vai dizer se um número é "positivo", "negativo" ou "neutro":
    Essa função vai receber um número como parâmetro e retornar uma string como resposta;
    Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
    1.1 Descreva todos os cenário de teste utilizando describes;
    1.2 Descreva todos os testes que serão feitos utilizando its;
    1.3 Crie as asserções validando se os retornos de cada cenário têm o tipo e o valor esperado. */

const { expect } = require('chai');
const defineNumber = require('../ex01');

describe('1. Testa a função', () => {
  describe('Quando inserido um valor positivo', () => {
    it('1.1 retorna uma string', () => {
      const result = defineNumber(50);
      expect(result).to.be.a('string');
    })

    it('1.2 retorna a string "positivo"', () => {
      const result = defineNumber(50);
      expect(result).to.be.equal('positivo');
    })
  })

  describe('Quando inserido um valor negativo', () => {
    it('1.3 retorna uma string', () => {
      const result = defineNumber(-50);
      expect(result).to.be.a('string');
    })

    it('1.4 retorna a string "negativo"', () => {
      const result = defineNumber(-50);
      expect(result).to.be.equal('negativo');
    })
  })

  describe('Quando inserido o valor zero', () => {
    it('1.5 retorna uma string', () => {
      const result = defineNumber(0);
      expect(result).to.be.a('string');
    })

    it('1.6 retorna a string "neutro"', () => {
      const result = defineNumber(0);
      expect(result).to.be.equal('neutro');
    })
  })
})
