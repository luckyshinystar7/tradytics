// EXEMPLO Classe

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor; // o ? indica que esse campo não é obrigatório

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."

// 1. Crie uma classe cujo objeto represente um Cachorro.
class Dog {
  _nome: string;
  _raca?: string;
  _peso?: number;

  constructor (nome: string, raca?: string, peso?: number) {
    this._nome = nome;
    this._raca = raca;
    this._peso = peso;
  }

  status():string {
    if (!this._peso && !this._raca) return `Meu caozinho se chama ${this._nome}.`;
    if (!this._peso) return `Meu caozinho se chama ${this._nome}, ele é da raça ${this._raca}.`;
    if (!this._raca) return `Meu caozinho se chama ${this._nome}, ele pesa ${this._peso}kg.`;
    return `Meu caozinho se chama ${this._nome}, ele é da raça ${this._raca} e pesa ${this._peso}kg.`;
  }
}

const dog1 = new Dog ('John', 'Doberman', 15);
const dog2 = new Dog ('Mila', 'srd')
console.log(dog2.status());
console.log(dog1, dog2);

// 2. Crie uma classe cujo objeto represente uma Casa.
// 3. Crie uma classe cujo objeto represente um Voo.