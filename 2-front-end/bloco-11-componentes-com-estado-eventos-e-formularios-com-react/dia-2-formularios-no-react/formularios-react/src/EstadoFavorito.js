import React from "react";
import { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleChange} />
      </label>
    )
  }

}

export default EstadoFavorito