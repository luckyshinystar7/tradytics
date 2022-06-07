// Ex - 1 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
//       A fórmula para calcular o IMC é peso / altura ^ 2. Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
//       Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.
//       Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.
//       Armazene o script no arquivo imc.js.
const imc = (peso, altura) => console.log(`Seu IMC é: ${peso / altura * altura}`);

module.exports(imc);
