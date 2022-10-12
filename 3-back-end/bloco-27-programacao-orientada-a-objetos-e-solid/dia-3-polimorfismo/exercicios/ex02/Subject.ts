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