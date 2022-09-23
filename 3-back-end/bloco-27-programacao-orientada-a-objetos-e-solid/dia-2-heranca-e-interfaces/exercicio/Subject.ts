/* 
  Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.

  `Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres
*/

export default class Subject {
  private _name:string;

  constructor(name:string) {
    this.validateName(name);
    this._name = name;
  }

  get name():string {
    return this._name;
  }

  set name(name:string) {
    this.validateName(name);
    this._name = name;
  }

  private validateName(name:string):void {
    if (name.length < 3) {
      throw new Error ('Nome deve possuir no mínimo 3 caracteres');
    }
  }
}

// Para validar
const java = new Subject('java');
console.log(java.name);
java.name = 'JavaScript';
console.log(java.name);
java.name = 'd';
