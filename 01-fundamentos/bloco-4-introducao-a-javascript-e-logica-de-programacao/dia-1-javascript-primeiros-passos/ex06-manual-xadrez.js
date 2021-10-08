// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pawn = "forward 1 square";
const bishop = "diagonal any distance";
const knight = "L";
const rook = "forward and sideways any distance";
const queen = "anyway and any distance";
const king = "anyway 1 square";

let piece = "KING".toLowerCase();

switch (piece) {
  case "pawn":
    console.log(pawn);
    break;

  case "bishop":
    console.log(bishop);
    break;

  case "knight":
    console.log(knight);
    break;

  case "rook":
    console.log(rook);
    break;

  case "queen":
    console.log(queen);
    break;

  case "king":
    console.log(king);
    break;

  default:
    console.log("Your piece invalid. Try again using another one.");
}
