// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0;

for (let i = 0; i < numbers.length; i += 1) {
  c = c + numbers[i];
}
console.log('Sua somatória deu: ',c)
