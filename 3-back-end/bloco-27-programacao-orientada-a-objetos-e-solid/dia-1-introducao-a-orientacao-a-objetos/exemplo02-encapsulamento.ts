class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const person1 = new Person('Maria', 171, 58, 19);
const person2 = new Person('João', 175, 66, 18);

// Alteração direta de variável pública
person1.name = 'Mariah';
// Acesso direto a variável pública
console.log(person1.name);
// Acesso a método público que manipula atributo privado
console.log(person1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(person2.age);
// Acesso a método público que manipula atributo privado
person2.birthday();
console.log(person2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
person2.age = 17;
console.log(person2.age);
// Leitura de atributo readonly
console.log(person1.height);

// TESTANDO VALIDAÇÃO
person2.age = 300;
console.log(person2.age);
// Saída: 17

// Agora um exemplo de sintaxes que são inválidas neste contexto:
// Acesso externo à classe a atributo privado
person1._weight;
person1._weight = 1;
// Acesso a atributo inexistente
person1.weight;
person1.weight = 1;
// Escrita em atributo readonly
person1.height = 1;

/*
Saída:
Mariah
58
18
19
17
171
*/