// Ex01
export enum Color {
  Black = "Preto",
  Blue = "Azul",
  Green = "Verde",
  Silver = "Prata",
}
  
export enum Doors {
  DRIVER = "da motorista",
  RIDE = "da carona",
  BEHIND = "traseira"
}

export enum Direction {
  RIGHT = "Direita",
  LEFT = "Esquerda"
}

export class Car {
  brand:string;
  color:Color;
  doors:number;

  constructor (brand:string, color:Color, doors:number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  
  turnOn():void {
    console.log('Liga o carro')
  }

  turnOff():void {
    console.log('Desliga o carro')
  }

  speedUp():void {
    console.log('Acelera o carro')
  }

  speedDown():void {
    console.log('Desacelera o carro')
  }

  stop():void {
    console.log('Para o carro')
  }

  turn(direction:Direction) {
    console.log(`Converge para a ${direction}`)
  }

  honk():void {
    console.log('Honk Honk')
  }

  openTheDoor(door:Doors):void {
    console.log(`Abre a porta ${door}`)
  }

  closeTheDoor(door:Doors):void {
    console.log(`Fecha a porta ${door}`)
  }
}