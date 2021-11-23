const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA(array) {
  let upperA = 0;
  let lowerA = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] === 'A') { upperA += 1 };
      if (array[i][j] === 'a') { lowerA += 1 };
    }
  }
  return `Foi encontrado "A":${upperA} vezes e "a":${lowerA} vezes.`;
}

console.log(containsA(names));
