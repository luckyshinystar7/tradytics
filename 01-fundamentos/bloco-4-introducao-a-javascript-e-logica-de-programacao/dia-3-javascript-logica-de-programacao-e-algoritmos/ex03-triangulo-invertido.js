// Agora inverta o lado do triângulo
const n = 5;
let linha = "";

console.log(linha);

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n; j++){
    if (j < i){
      linha += " "
    } else {
      linha += "*"
    }
  }
  console.log(linha);
  linha = "";
}
