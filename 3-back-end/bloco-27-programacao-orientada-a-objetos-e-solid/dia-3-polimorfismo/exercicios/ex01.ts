// 🚀 Exercício 1: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. 
// Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.

export default abstract class Person {
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
  
  // const test = new Person('Mario', new Date(1995,5,20));
  // console.log(test);
  // console.log(test.name);
  // test.name = 'Júlio';
  // console.log(test.name);