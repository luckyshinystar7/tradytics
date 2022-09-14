// Exemplo de types
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 10, y: 200 });

// 1. Crie um type para um objeto que represente um pássaro.
type Bird = {
  peso: number,
  familia: string,
  extinto: boolean,
}

// 2. Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Soma = (x: number, y: number) => number;

// 3. Crie um type para um objeto que represente um endereço.
type Endereco = {
  rua: string,
  numero: number,
  complemento: string,
  cep: string,
}