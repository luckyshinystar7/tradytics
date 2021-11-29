// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./getPokemonDetails");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails(string, (callback) => {
      try {
        expect(callback).toBe('EITA');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it.only("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails('Bulbasaur', (callback) => {
      try {
        expect(callback).toBe('Olá, seu pokemon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});