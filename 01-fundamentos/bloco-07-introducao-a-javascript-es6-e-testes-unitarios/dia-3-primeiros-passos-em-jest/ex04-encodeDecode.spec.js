// 4 - Para as funções encode e decode crie os seguintes testes em Jest:
// 4.1 - Teste se encode e decode são funções;
// 4.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// 4.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
// 4.4 - Teste se as demais letras/números não são convertidos para cada caso;
// 4.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

function encode(word) {
  // recebe uma string e devolve outra trocando todas as vogais por numeros
  // for (let i = 0 ; i <= word.length ; i++)
  let encodedWord = '';
  encodedWord = word.replaceAll('a', '1');
  encodedWord = encodedWord.replaceAll('e', '2');
  encodedWord = encodedWord.replaceAll('i', '3');
  encodedWord = encodedWord.replaceAll('o', '4');
  encodedWord = encodedWord.replaceAll('u', '5');
  return encodedWord;
}
function decode(word) {
  // recebe uma string e devolve outra trocando todos os numeros por vogais definidos
  let decodedWord = '';
  decodedWord = word.replaceAll('1', 'a');
  decodedWord = decodedWord.replaceAll('2', 'e');
  decodedWord = decodedWord.replaceAll('3', 'i');
  decodedWord = decodedWord.replaceAll('4', 'o');
  decodedWord = decodedWord.replaceAll('5', 'u');
  return decodedWord;
}

// implemente seus testes aqui

describe('4.1 - Teste se encode e decode são funções', () => {
  it('encode é uma função', () => {
    expect(typeof (encode)).toBe('function');
  })
  it('decode é uma função', () => {
    expect(typeof (decode)).toBe('function');
  })
});