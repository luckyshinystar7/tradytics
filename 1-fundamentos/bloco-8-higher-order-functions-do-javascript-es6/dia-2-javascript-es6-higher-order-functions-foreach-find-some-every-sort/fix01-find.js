// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (n) => {
  // Adiciona seu código aqui
 return (n % 3 === 0 && n % 5 === 0)
}

const t = numbers.find(findDivisibleBy3And5)

console.log(t);
