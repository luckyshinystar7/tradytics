// Ex1 - Crie uma função que receba três parâmetros e retorna uma Promise.
// 1.1 - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// 1.2 - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// 1.3 - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// 1.4 - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function ex1(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number')  reject(new Error("Informe apenas números"));
    const result = ((a + b) * c);
    if (result < 50) reject(new Error("Valor muito baixo"));
    resolve(result)
  });

  return promise;
}

// TESTANDO EXERCÍCIO
// ex1(5, 5, 7)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`));

  module.exports = ex1;
