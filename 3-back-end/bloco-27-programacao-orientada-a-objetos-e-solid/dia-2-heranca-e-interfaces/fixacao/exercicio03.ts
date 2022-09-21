// Para fixar:
// Com base no final do primeiro exercício de fixação:
//     • No construtor da Subclass, o atributo isSuper deve ser setado como false. Você vai precisar utilizar o super.
//     • Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console “Super!” se for true e “Sub!” se for false;

class Superclass3 {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }
  public sayHello3() {
    console.log('Olá Mundo!');
  }
}

class Subclass3 extends Superclass3 {
  constructor() {
    super()
    this.isSuper = false;
  }
}

function myFunc3 (x:any) {
  x.sayHello3();
  console.log(`Classe habilitada como sup: ${x.isSuper}`)
}

const eu3 = new Superclass3();
const vc3 = new Subclass3();

myFunc(eu3);
myFunc(vc3);
