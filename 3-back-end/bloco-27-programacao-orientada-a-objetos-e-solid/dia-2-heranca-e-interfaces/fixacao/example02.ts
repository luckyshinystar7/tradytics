// EXEMPLO - atributos PRIVATE não são acessíveis nem alteraveis em subClasses
//           atributos protected são

class Animal1 {
  constructor(private birthDate: Date) { } // Repare no private

}
class Bird1 extends Animal1 {
  showBirthDate() {
    console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
  }
}

class Animal2 {
  constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
}
class Bird2 extends Animal2 {
  showBirthDate() {
    console.log(this.birthDate); // Okay!
  }
}