const getSuperHero = require('./fix01.js');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720');
  expect(hero).toBe('V de Vingança');
});
