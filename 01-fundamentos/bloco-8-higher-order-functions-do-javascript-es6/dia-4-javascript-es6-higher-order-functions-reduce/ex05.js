const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// RESOLUCAO COM FOR
// function containsA(array) {
//   let upperA = 0;
//   let lowerA = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < array[i].length; j += 1) {
//       if (array[i][j] === 'A') { upperA += 1 };
//       if (array[i][j] === 'a') { lowerA += 1 };
//     }
//   }
//   return `Foi encontrado "A":${upperA} vezes e "a":${lowerA} vezes.`;
// }

// console.log(containsA(names));

// RESOLUCAO COM JOIN SPLIT E REDUCE
// const containsA = names.join().split('').reduce((acc, curr) => (curr === 'a' || curr === 'A') ? acc + 1 : acc, 0)

// console.log(containsA);

const containsA = names.reduce((acc, nome) => {
  const x = nome.split('').reduce((cont, letra) => {
    if (letra === 'A' || letra === 'a') return cont += 1;
    return cont
  }, 0)
  acc += x;
  return acc;
}, 0)

console.log(containsA);
