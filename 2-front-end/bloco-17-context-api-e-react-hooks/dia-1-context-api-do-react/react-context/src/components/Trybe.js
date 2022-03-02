import React, { Component } from 'react';
import { FamilyContext } from './Context01';

export default class Trybe extends Component {
  static contextType = FamilyContext;
  render() {
    const { inheritance } = this.context;
    return (
      <div>{`Trybe - Context API R$: ${inheritance}`}</div>
    )
  }
}
