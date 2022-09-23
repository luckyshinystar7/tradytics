/*
Dicionário en-pt:
- fish: peixe
*/
abstract class Animal2 {
  constructor(public name: string) { }
  abstract move(): void
}
class Bird2 extends Animal2 {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal2 extends Animal2 {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish2 extends Animal2 {
  move() { console.log(`${this.name} está nadando.`); }
}
const a2 = new Fish2('Tubarão');
const b2 = new Bird2('Papagaio');
const m2 = new Mammal2('Tatu');
const myMove2 = (animal: Animal2) => {
  animal.move();
}
myMove2(a);
myMove2(b);
myMove2(m);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/