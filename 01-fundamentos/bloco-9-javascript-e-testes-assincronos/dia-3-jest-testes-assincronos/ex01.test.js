// 1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-04-block6-project-facebook-signup-tests' e 'sd-03-block9-project-zoo-functions-tests' se encontram nessa lista.
// githubApi.test.js

const url = 'https://api.github.com/orgs/tryber/repos';
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

test('Verifica se os repositórios "sd-01-week4-5-project-todo-list" está na lista', () => {
  return expect(getRepos(url)).resolves.toContain('sd-04-block6-project-facebook-signup-tests');
});

test('Verifica se os repositórios "sd-01-week4-5-project-todo-list" está na lista', () => {
  return expect(getRepos(url)).resolves.toContain('sd-03-block9-project-zoo-functions-tests');
});
