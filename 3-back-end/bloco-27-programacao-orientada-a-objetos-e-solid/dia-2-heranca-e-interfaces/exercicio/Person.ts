/*
   Exercício 1: Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
`Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos
*/

export default class Person {
  private _name: string;
  private _birthDate: Date;
  
  constructor(name:string, birthdate:Date) { 
    this.validateName(name);
    this.validateBirthDate(birthdate);
    this._name = name;
    this._birthDate = birthdate;
  }

  get name():string {
    return this._name;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set name(name:string) {
    this.validateName(name);
    this._name = name;
  }

  set birthDate(birthDate:Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private validateName (name:string):void {
      if (name.length <= 3) {
        throw new Error('Nome deve ter no minimo 3 letras');
      }
    }

  private validateBirthDate (birthdate:Date):void {
    if (birthdate.getTime() > new Date().getTime() ) {
      throw new Error('Data de nascimento não pode ser no futuro');
    }
    
    const age:number = ((new Date().getTime() - birthdate.getTime()) / 31536000000) // valor representa 1 ano em milissegundos, assim age sai em anos
    if (age > 120 ) {
      throw new Error('Idade muito avançada');
    }  
  }
  }
  
  const test = new Person('Mario', new Date(1995,5,20));
  console.log(test);
  console.log(test.name);
  test.name = 'Júlio';
  console.log(test.name);
