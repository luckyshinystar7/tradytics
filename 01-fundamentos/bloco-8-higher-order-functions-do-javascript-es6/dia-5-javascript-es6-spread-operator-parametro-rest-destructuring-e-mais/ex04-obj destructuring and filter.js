// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const people = [
  {
    firstName: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    firstName: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    firstName: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    firstName: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    firstName: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (lista) => lista.filter(({ nationality } = value) => nationality === 'Australian');
console.log(filterPeople(people));
