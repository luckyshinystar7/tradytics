// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...a) => a.reduce((acc, b) => acc + b);

console.log(sum(1, 2, 3, 41, 9));
