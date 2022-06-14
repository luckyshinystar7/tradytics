// 8. Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
//     Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
//     Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
//     Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
//     Caso contrário, rejeite a Promise com o valor do número.

const fizzBuzz = (int) => {
  return new Promise((resolve, reject) => {
    if (int % 3 === 0 && int % 5 === 0) return resolve('FizzBuzz');
    if (int % 3 === 0) return resolve('Fizz');
    if (int % 5 === 0) return resolve('Buzz');
    else reject(int);
  })
};

const chamaFizz = async (number) => {
  try {
    const response = await fizzBuzz(number)
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

chamaFizz(3000);