// Ex - 1 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
//       A fórmula para calcular o IMC é peso / altura ^ 2. Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
//       Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.
//       Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.
//       Armazene o script no arquivo imc.js.

peso = 60;
altura = 1.75;

const imc = console.log(`Seu IMC é: ${peso / (altura * altura)}`);

// Ex - 2 Agora, permita que o script seja executado através do comando npm run imc
//       O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js.
// FEITO
