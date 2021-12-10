const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//  sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 113

const soma = numbers.reduce((acc, numero) => acc + numero);

console.log(soma);
