// Para fixar:
// Com base no exemplo do exercício anterior:
//     • Comente a criação da instância da Superclass.
//     • Comente a chamada da função que recebe o objeto do tipo Superclass como argumento.
//     • Faça a função receber não mais um objeto da Superclass, mas sim da Subclass.
//     • Crie, na Subclass, um método público chamado sayHello2.
//     • Chame o método sayHello dentro do método sayHello2.
//     • Mude a visibilidade do método sayHello de public para protected.
//     • Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2.
//     • Mude a visibilidade do método sayHello de protected para private. O que acontece?
// Obs: Desfaça estas alterações antes de fazer o próximo exercício, ou seja, deixe como estava ao final do primeiro exercício.

class Superclass1 {
  public isSuper = true;
  protected sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass1 extends Superclass1 {
  sayHello2() {
    super.sayHello()
  }
}

function myFunc1 (x:any) {
  x.sayHello();
}

// const eu1 = new Superclass1();
const vc1 = new Subclass1();

// myFunc1(eu1);
myFunc1(vc1);

