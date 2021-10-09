// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const c1 = 10;
const c2 = 14;
const c3 = 7;

if (c1 % 2 !== 0 || c2 % 2 !== 0 || c3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}