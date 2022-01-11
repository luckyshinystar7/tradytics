import React from "react";
import { Component } from 'react';
import Idade from './Idade';

class Fix02 extends Component { // Transformando partes do Formulario em subcomponentes, mantendo o state e a function handleChange no pai

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <h1>Partiu aprender</h1>
        <form>
          <fieldset>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </label></fieldset>
          <fieldset>
            <Idade value={this.state.idade} handleChange={this.handleChange} />
          </fieldset>
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          /> Confirmar presença
        </form>
      </>




    )
  }

}

export default Fix02;