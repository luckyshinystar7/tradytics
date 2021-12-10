// 3. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const x = '10!';

const fatorial = (y) => {
  y = parseInt(y);

  if (y < 1) {
    return 'O numero deve ser maior que 0';
  } else {

    let resp = y;
    for (let i = 1; i < y; i += 1) {
      resp *= i;
    }
    return resp;
  };
}

console.log(fatorial(x));
