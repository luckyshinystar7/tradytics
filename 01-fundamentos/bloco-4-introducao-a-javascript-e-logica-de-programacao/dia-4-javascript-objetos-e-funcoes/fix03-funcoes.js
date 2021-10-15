// 1- Pegue cada um dos exercícios do primeiro dia de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

function division(a, b) {
  return a / b;
}

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}
function mod(a, b) {
  return a % b;
}
function biggerOf2(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function biggerOf3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
function positive(a) {
  if (a > 0) {
    return("positive");
  } else if (a < 0) {
    return("negative");
  } else {
    return("zero");
  }
}
function angles(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return("Oxi, nunca vi triângulo com ângulo negativo.");
  } else if (a + b + c == 180) {
    return("Angulos do triângulo verificados com sucesso!");
  } else {
    return("Issae não é triângulo nem aqui nem na China.");
  }
}
function chessManual(piece) {
  const pawn = "forward 1 square";
const bishop = "diagonal any distance";
const knight = "L";
const rook = "forward and sideways any distance";
const queen = "anyway and any distance";
const king = "anyway 1 square";

piece = piece.toLowerCase();

switch (piece) {
  case "pawn":
    return(pawn);
    break;

  case "bishop":
    return(bishop);
    break;

  case "knight":
    return(knight);
    break;

  case "rook":
    return(rook);
    break;

  case "queen":
    return(queen);
    break;

  case "king":
    return(king);
    break;

  default:
    return('Your piece invalid. Try again using another one.');
}
}
function gradeConv(nota) {
  if (nota >= 90 && nota <= 100) {
    return("Nota A");
  } else if (nota >= 80 && nota < 90) {
    return("Nota B");
  } else if (nota >= 70 && nota < 80) {
    return("Nota C");
  } else if (nota >= 60 && nota < 70) {
    return("Nota D");
  } else if (nota >= 50 && nota < 60) {
    return("Nota E");
  } else if (nota >= 0 && nota < 50) {
    return("Nota F");
  } else {
    return("A nota deve estar entre 0 e 100");
  }
}
console.log(gradeConv(84));
