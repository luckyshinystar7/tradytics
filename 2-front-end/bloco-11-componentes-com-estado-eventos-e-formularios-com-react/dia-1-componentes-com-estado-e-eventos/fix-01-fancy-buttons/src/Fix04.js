import React from 'react';
// Declare dentro da classe do seu componente do exercício de fixação Fix01 a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
class Fix04 extends React.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Oi")
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <>
      <button type="button" onClick={this.handleClick} >Oi</button>
      <button type="button" onClick={() => console.log("Olá")} >Ola</button>
      <button type="button" onClick={() => console.log("Tchau")} >Tchau</button>
      {/* PS - Se você definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...} e nas linhas 13 e 14, você não precisará fazer o bind no constructor, mas sua aplicação será menos performática! Se quiser ler mais a respeito, busque o texto "Binding vs arrow-function (for react onClick event)" nos Recursos Adicionais! */}
    </>
  }
}

export default Fix04;
