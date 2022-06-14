// 3. Reescreva o código do exercício anterior para que utilize async/await.

const ex01 = require('./ex01');

const randomNumber = () => Math.floor(Math.random() * 10 + 1)
const a = randomNumber();
const b = randomNumber();
const c = randomNumber();
console.log(`Números gerados, a:${a}, b:${b}, c:${c} `)

const ex03 = async (a, b, c) => {
  try {
    const result = await ex01(a, b, c);
    console.log(`sucesso: ${result}`);
  } catch (error) {
    console.log(`erro: ${error.message}`)
  }
};

ex03(a, b, c);
