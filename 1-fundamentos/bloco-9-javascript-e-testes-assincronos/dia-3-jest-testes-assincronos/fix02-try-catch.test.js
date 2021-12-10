const getSuperHero = require('./fix01.js');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720');
  expect(hero).toBe('Wonder Woman');
});
test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  // expect.assertions(2);
  try {
    await getSuperHero('https://www.urlalterada.com');
  } catch (error) {
    expect(error.code).toBe('ENOTFOUND');
    expect(error.message).toBe('request to https://www.urlalterada.com/ failed, reason: getaddrinfo ENOTFOUND www.urlalterada.com');
  }
});
