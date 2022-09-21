// Para fixar:
//     • Crie uma interface chamada MyInterface.
//     • MyInterface deve possuir um atributo myNumber do tipo number.
//     • MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.
//     • Crie uma classe MyClass que implementa MyInterface.
//     • Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
//     • Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
//     • Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.
interface MyInterface {
  myNumber: number;

  myFunc(myParam:number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber:number) {
    this.myNumber = myNumber;
  }
  myFunc(myParam:number) {
    return `O número da verdade é ${this.myNumber + myParam}`;
  }
}

const teste = new MyClass(5);
console.log(teste.myFunc(3));