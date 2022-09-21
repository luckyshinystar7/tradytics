// Para fixar:
// Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples? Juro que parece muita coisa, mas não é!
//     • Crie uma classe chamada Superclass.
//     • A Superclass deve possuir um atributo público isSuper
//     • isSuper deve ser setado como true na inicialização.
//     • A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.
//     • Crie uma classe chamada Subclass que herda da Superclass.
//     • Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
//         ◦ Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
//     • Crie um objeto da Superclass e outro da Subclass.
//     • Chame a função myFunc 2 vezes, passando os objetos criados.

class Superclass {
  public isSuper = true;
  public sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {

}

function myFunc (x:any) {
  x.sayHello();
}

const eu = new Superclass();
const vc = new Subclass();

myFunc(eu);
myFunc(vc);