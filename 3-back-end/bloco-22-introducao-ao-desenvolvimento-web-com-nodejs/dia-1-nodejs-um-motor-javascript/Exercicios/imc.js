const rs = require('readline-sync');

console.log("Olá!! Bem vindo ao calculador de IMC Nimbus 2000");

peso = rs.questionFloat('Informe seu peso? (kg): ');
altura = rs.questionFloat('Informe sua altura? (m): ');

const imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc}`);

if (imc < 18.5) console.log('Sua classificação é: Abaixo do peso (magreza)');    
if (imc < 25) console.log('Sua classificação é: Peso normal');
if (imc < 30) console.log('Sua classificação é: Acima do peso (sobrepeso)');
if (imc < 35) console.log('Sua classificação é: Obesidade grau I');
if (imc < 40) console.log('Sua classificação é: Obesidade grau II');
if (imc >= 40) console.log('Sua classificação é: Obesidade grau III e IV');

// Ex - 1 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
//       A fórmula para calcular o IMC é peso / altura ^ 2. Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
//       Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.
//       Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.
//       Armazene o script no arquivo imc.js.

// Ex - 2 Agora, permita que o script seja executado através do comando npm run imc
//       O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js.
// FEITO

// Ex - 3 Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
//      Edite o código para que os valores de peso e altura sejam informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal utilizando a lib readline-sync.
// FEITO

// Ex - 4 Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats.
// Encontrou a função? Show! Agora utilize-a para solicitar o input de peso.
// FEITO Já havia sido feito junto com o 3 xD

// Ex - 5 Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:
// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV