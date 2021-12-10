// 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggerIndex(numbers) {
  let iMax = 0;
  let maxNumber = 0;

  for (i in numbers) {
    if (numbers[i] >= maxNumber) {
      maxNumber = numbers[i];
      iMax = i;
    }
  }
  //console.log(iMax);
  //console.log(maxNumber);
  return iMax;
}

r = biggerIndex([2, 3, 6, 7, 10, 1]);
console.log(r);
