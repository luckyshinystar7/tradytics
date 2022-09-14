// EXEMPLO Interface

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}
// Observe que um objeto que atende à interface Teacher precisa definir valores para todas as propriedades exigidas por essa interface, incluindo as propriedades da interface base Employee.

// EXERCICIOS
//1. Crie uma interface cujo objeto represente um Automóvel.
interface Car {
  brand:string;
  model:string;
  year:number|string;
}

//2. Crie uma interface cujo objeto represente um Felino.

//3. Crie uma interface cujo objeto represente uma Aeronave.
