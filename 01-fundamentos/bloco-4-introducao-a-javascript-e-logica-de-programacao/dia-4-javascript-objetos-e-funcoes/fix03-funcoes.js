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
    return(a);
  } else {
    return(b);
  }
}
function biggerOf3(a, b, c) {
  if (a > b && a > c) {
    return(a);
  } else if (b > c) {
    return(b);
  } else {
    return(c);
  }
}

console.log(division(10, 20));
