import React from "react";
import { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    let maior20 = undefined;
    if (value.length > 20) maior20 = "maior que 20";

    let maior30 = undefined;
    if (value.length > 30) {
      maior30 = " e agora maior que 30 também";
    }


    return (
      <>
        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
          <textarea
            name="estadoFavorito"
            value={value}
            onChange={handleChange}
          />
        </label>
        <span>{maior20 ? maior20 : ''}</span>
        <span>{maior30 ? maior30 : ''}</span>
      </>
    )
  }

}

export default EstadoFavorito