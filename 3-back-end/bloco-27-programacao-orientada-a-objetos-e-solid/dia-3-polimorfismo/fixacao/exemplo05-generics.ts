class Contract<T> { // Agora a classe recebe o genérico T
  static _number = 0;
  constructor(public broker: T) { } // T no lugar de Person
  static get number() { return this._number; }
}

// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
console.log(c1.broker.cpf); // Okay

// Tipagem explícita
const c2: Contract<LegalPerson> = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj); // Okay

/*
Saída:
123456789
834729384723
*/