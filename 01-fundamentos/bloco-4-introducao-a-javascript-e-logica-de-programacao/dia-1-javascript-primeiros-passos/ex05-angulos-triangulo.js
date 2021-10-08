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