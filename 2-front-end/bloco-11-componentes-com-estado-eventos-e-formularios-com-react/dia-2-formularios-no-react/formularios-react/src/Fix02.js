import React from "react";
import { Component } from 'react';
import Idade from './Idade';
import EstadoFavorito from "./EstadoFavorito";

class Fix02 extends Component { // Transformando partes do Formulario em subcomponentes, mantendo o state e a function handleChange no pai

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.changeErrorStatus = this.changeErrorStatus.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      formularioComErros: false,
    };
  }

  changeErrorStatus = () => {
    this.setState({ formularioComErros: true })
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
        <h1>Partiu aprender React Forms e manipulação do state</h1>
        <form>
          <fieldset>
            <EstadoFavorito
              value={this.state.estadoFavorito}
              handleChange={this.handleChange}
              changeErrorStatus={this.changeErrorStatus} />
          </fieldset>
          <fieldset>
            <Idade
              value={this.state.idade}
              handleChange={this.handleChange} />
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