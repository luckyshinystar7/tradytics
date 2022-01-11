import React from "react";
import { Component } from 'react';

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input
        type="number"
        name="idade"
        value={value}
        onChange={handleChange}
      />
    )
  }

}

export default Idade