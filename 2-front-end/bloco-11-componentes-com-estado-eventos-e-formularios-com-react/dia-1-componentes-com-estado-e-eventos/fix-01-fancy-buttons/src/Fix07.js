import React from 'react';

// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

class Fix07 extends React.Component {

  constructor() {
    super()

    this.state = {
      oi: 0,
      buttonBackgroundColor: "blue",
      color: "azul"
    }

    this.handleClick = this.handleClick.bind(this)
  }

componentDidUpdate() { 
  console.log(`Botão ficando ${this.state.color} no DidUpdate`)
 }

  handleClick() {
    if (this.state.oi % 2 !== 0) this.setState({ buttonBackgroundColor: "green", color: "verde" });
    else this.setState({ buttonBackgroundColor: "blue", color: "azul" });    
    this.setState((prevState, _props) => ({
      oi: prevState.oi + 1
    }))
    console.log(`Botão ficando ${this.state.color} no Click`)
  }

  render() {

    const { oi, buttonBackgroundColor } = this.state;

    return <>
      <button type="button"
        style={{ backgroundColor: buttonBackgroundColor }}
        onClick={this.handleClick}
      >Oi: {oi} cliques
      </button>
    </>
  }
}

export default Fix07;
