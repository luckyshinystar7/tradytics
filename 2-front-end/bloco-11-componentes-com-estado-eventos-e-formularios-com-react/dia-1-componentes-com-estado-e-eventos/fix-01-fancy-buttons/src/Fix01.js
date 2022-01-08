import React from 'react';

class Fix01 extends React.Component {
  handleClick() {
    console.log('Oi!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <>
      <button type="button" onClick={this.handleClick} >Oi</button>
      <button type="button" onClick={() => console.log("Olá")} >Ola</button>
      <button type="button" onClick={() => console.log("Tchau")} >Tchau</button>
    </>
  }
}

export default Fix01;
