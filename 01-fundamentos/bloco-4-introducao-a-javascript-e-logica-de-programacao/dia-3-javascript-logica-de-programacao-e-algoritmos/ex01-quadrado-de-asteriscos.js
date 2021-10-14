// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
const n = 5;
var linha = "";

for (let i = 0; i < n; i++) {
  linha += "*";
}

for (let i = 0; i < n; i++) {
  console.log(linha);
}
