/*
  Exercício 2: Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

`Class`: Student
`Extends`: Person
`Attributes`:
    - enrollment: matrícula da pessoa estudante
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e
      preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
    - generateEnrollment: retorna uma string única gerada
      como matrícula para a pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
*/

import Person from "./Person"

export default class Student extends Person {
  private _enrollment:string;
  private _examsGrades:number[];
  private _worksGrades:number[];

  constructor(name:string, birthDate:Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment() 
  }

  get enrollment():string {
    return this._enrollment;
  }

  get examsGrades():number[] {
    return [...this._examsGrades];
  }

  get worksGrades():number[] {
    return [...this._worksGrades];
  }

  set examsGrades(grades:number[]) {
    this.validateExamGrades(grades);
    this.worksGrades = [...grades];
  }

  set worksGrades(grades:number[]) {
    this.validateWorkGrades(grades);
    this.worksGrades = [...grades];
  }

  private generateEnrollment():string {
    return Number(Math.random()*100000).toFixed(0); // gera um ID aleatório de 5 digitos
  }

  private validateExamGrades(grades:number[]):void {
    if (grades.length > 4) {
      throw new Error ('Limite de provas excedido')
    }
  }

  private validateWorkGrades(grades:number[]):void {
    if (grades.length > 2) {
      throw new Error ('Limite de trabalhos excedido')
    }
  }
}
