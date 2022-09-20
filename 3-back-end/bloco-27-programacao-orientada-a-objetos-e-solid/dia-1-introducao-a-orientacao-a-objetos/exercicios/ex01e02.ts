// Exercício 1: Vamos modelar algumas partes de um software de uma escola. 
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
class Student {
  private _matricula: number;
  public nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor (m:number, n:string, np:number[], nt:number[]) {
    this._matricula = m;
    this.nome = n;
    this._notasProva = np;
    this._notasTrabalho =nt;
  }

  // Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos.
  // Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

  notasSum ():number {
    const sumNP = this._notasProva.reduce((num,total) => total = total + num)
    const sumNT = this._notasTrabalho.reduce((num,total) => total = total + num)
    return (sumNP + sumNT)
  }

  notasMed ():number {
    const sumNP = this._notasProva.reduce((num,total) => total = total + num)
    const sumNT = this._notasTrabalho.reduce((num,total) => total = total + num)
    const medNP = sumNP / this._notasProva.length;
    const medNT = sumNT / this._notasTrabalho.length;
    const avg = ((medNP + medNT)/2);
    return avg;
  }

}