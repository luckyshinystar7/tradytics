import React, { Component } from 'react';

export default class Fix01 extends Component {
  render() {
    return (
        <div className="App">
          <label htmlFor="id-email">
            Email
            <input id="id-email" type="email" />
          </label>
          <input id="btn-send" data-testid="btn-send" type="button" value="Enviar" />
          <input id="btn-back" type="button" value="Voltar" />
        </div>
      );
  }
}
