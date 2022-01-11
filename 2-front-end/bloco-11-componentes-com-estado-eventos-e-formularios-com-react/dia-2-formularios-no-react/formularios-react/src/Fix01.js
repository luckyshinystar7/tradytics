import React from "react";
import { Component } from "react/cjs/react.production.min";

class Fix01 extends Component {

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
        <h1>Partiu testar</h1>
        <form>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
        </form>
      </>




    )
  }

}

export default Fix01;