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
    return "positive";
  } else if (a < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
function angles(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Oxi, nunca vi triângulo com ângulo negativo.";
  } else if (a + b + c == 180) {
    return "Angulos do triângulo verificados com sucesso!";
  } else {
    return "Issae não é triângulo nem aqui nem na China.";
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
      return pawn;
      break;

    case "bishop":
      return bishop;
      break;

    case "knight":
      return knight;
      break;

    case "rook":
      return rook;
      break;

    case "queen":
      return queen;
      break;

    case "king":
      return king;
      break;

    default:
      return "Your piece invalid. Try again using another one.";
  }
}
function gradeConv(nota) {
  if (nota >= 90 && nota <= 100) {
    return "Nota A";
  } else if (nota >= 80 && nota < 90) {
    return "Nota B";
  } else if (nota >= 70 && nota < 80) {
    return "Nota C";
  } else if (nota >= 60 && nota < 70) {
    return "Nota D";
  } else if (nota >= 50 && nota < 60) {
    return "Nota E";
  } else if (nota >= 0 && nota < 50) {
    return "Nota F";
  } else {
    return "A nota deve estar entre 0 e 100";
  }
}
function anyPrimeFinder(a, b, c) {
  if (c1 % 2 == 0 || c2 % 2 == 0 || c3 % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}
function anyOddFinder(a, b, c) {
  if (c1 % 2 !== 0 || c2 % 2 !== 0 || c3 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
function storeProfit(valorCusto, valorVenda) {
  let impostoSobreOCusto = 0.2 * valorCusto; //imposto de 20%, altere caso seja maior
  let valorCustoTotal;
  let lucro;

  valorCustoTotal = valorCusto + impostoSobreOCusto;

  lucro = valorVenda - valorCustoTotal;

  if (valorCusto <= 0 || valorVenda <= 0) {
    return "valores de entrada devem ser maiores que ZERO.";
  } else {
    return "seu lucro ao vender 1000 produtos foi de: $", lucro * 1000;
  }
}
function brTaxesCalc(salario) {
let inss = 0;
let salarioBase = 0;
let ir = 0;

// calculo INSS
if (salario < 1556.95 && salario >= 0) {
  inss = salario * 0.08;
  console.log("INSS:", inss.toFixed(2));
} else if (salario < 2594.93 && salario >= 0) {
  inss = salario * 0.09;
  console.log("INSS:", inss.toFixed(2));
} else if (salario < 5189.82 && salario >= 0) {
  inss = salario * 0.11;
  console.log("INSS:", inss.toFixed(2));
} else if (salario >= 5189.82) {
  inss = 570.88;
  console.log("INSS:", inss.toFixed(2));
} else {
  console.log("Salario invalido, insira um valor positivo.");
}

// calculo do IR
salarioBase = salario - inss;

if (salarioBase < 1903.99) {
  ir = 0;
  console.log("IR: Isento");
} else if (salarioBase < 2826.66) {
  ir = salarioBase * 0.075 - 142.8;
  console.log("IR:", ir.toFixed(2));
} else if (salarioBase < 3751.06) {
  ir = salarioBase * 0.15 - 354.8;
  console.log("IR:", ir.toFixed(2));
} else if (salarioBase < 4664.69) {
  ir = salarioBase * 0.225 - 636.13;
  console.log("IR:", ir.toFixed(2));
} else {
  ir = salarioBase * 0.27 - 869.36;
  console.log("IR:", ir.toFixed(2));
}
return('Seu salario liquido: ' + (salarioBase - ir).toFixed(2));

}

console.log(brTaxesCalc(5000));
