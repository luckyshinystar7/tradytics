// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
// RESOLVIDO USANDO FOR
// let arrayFinal = [];
// const reduz = (elemento) => {
//   for (let i = 0; i < elemento.length; i += 1) {
//     for (let j = 0; j < elemento[i].length; j += 1) {
//       arrayFinal.push(elemento[i][j]);
//     }
//   }
// }
// reduz(arrays);
// console.log(arrayFinal);

// RESOLVIDO USANDO CONCAT
// const listaFinal = arrays[0].concat(arrays[1], arrays[2]);
// console.log(listaFinal);

//Resolvendo usando REDUCE
const arrayFinal = arrays.reduce((acc, elemento) => acc.concat(elemento));

console.log(arrayFinal);
