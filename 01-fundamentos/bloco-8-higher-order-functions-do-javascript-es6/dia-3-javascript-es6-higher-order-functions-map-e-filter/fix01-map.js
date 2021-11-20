// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
// const listProducts = [{ Arroz: 2.99 },...]
// Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as HOFs podem receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada! Use isso em seu favor.

// SOLUCAO USANDO FOR
// const union = [];
// for (let i = 0; i < products.length; i += 1) {
//   let obj = { product: products[i], price: prices[i] };
//   union.push(obj);
// }
// console.log(union);

// SOLUCAO USANDO MAP E ARROW FUNCTIONS NOMINAIS
// const callback = (value, index) => {
//   const x = { product: value, price: prices[index] };
//   return x;
// };

// const union2 = (arr1, arr2) => {
//   return products.map(callback);
// }

// console.log(union2(products, prices));

// SOLUCAO USANDO MAP E ARROW FUNCTIONS ANONIMAS

const union3 = (arr1, arr2) => products.map((value, index) => {
  const x = { product: value, price: prices[index] };
  return x;
});
console.log(union3(products, prices));
