// Crie uma função que receba uma frase e retorne qual a maior palavra.

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const arrayFrase = frase.split(' ');

const maiorPalavra = (x) => {
  let palavra = '';
  for (let i = 0; i < x.length; i += 1) {
  palavra = x[i].length > palavra.length ? x[i] : palavra ;
  }
  return palavra;
}

console.log(maiorPalavra(arrayFrase));
