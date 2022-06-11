// 2. Escreva um código para consumir a função construída no exercício anterior.
//      2.1 Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
//      2.2 Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
//      2.3 Utilize then e catch para manipular a Promise retornada pela função:
//       - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
//       - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const ex01 = require('./ex01');

const randomNumber = () => Math.floor(Math.random() * 20 + 1)
const a = randomNumber();
const b = randomNumber();
const c = randomNumber();
console.log(`Números gerados, a:${a}, b:${b}, c:${c} `)

ex01(a, b, c)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
