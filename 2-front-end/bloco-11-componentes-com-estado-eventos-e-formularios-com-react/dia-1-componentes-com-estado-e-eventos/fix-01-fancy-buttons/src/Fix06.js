import React from 'react';

// Agora você vai converter sua aplicação Fix04 para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão. Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// Depois, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

class Fix06 extends React.Component {

  constructor() {
    super()

    this.state = {
      oi: 0,
      ola: 0,
      tchau: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState, _props) => ({
      oi: prevState.oi + 1
    }))
    console.log(`Oi clicado ${this.state.oi}x`)
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <>
      <button type="button" onClick={this.handleClick} >Oi: {this.state.oi} cliques</button>
      <button type="button" onClick={() => console.log("Olá")} >Ola</button>
      <button type="button" onClick={() => console.log("Tchau")} >Tchau</button>
    </>
  }
}

export default Fix06;
