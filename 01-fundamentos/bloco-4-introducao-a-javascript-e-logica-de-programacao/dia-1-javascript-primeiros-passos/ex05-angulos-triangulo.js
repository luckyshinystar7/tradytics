// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 120;
const b = 10;
const c = 50;


if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Oxi, nunca vi triângulo com ângulo negativo.");
} else if (a + b + c == 180) {
  console.log("Angulos do triângulo verificados com sucesso!");
} else {
  console.log("Issae não é triângulo nem aqui nem na China.");
}