import React, { Component } from 'react'
import './App.css';

class ProfissionalForm extends Component {
  render() {
    const { handleChanger } = this.props;
    return (
      <div className="App">
        <label>Resumo do Currículo<textarea id="curriculo" onChange={handleChanger} name="curriculo" type="text" rows={5} required maxLength={1000} /></label>
        <label>Cargo<input id='cargo' onChange={handleChanger} name='cargo' type="text" required maxLength={40} /></label>
        <label>Descrição do Cargo<textarea id="descricao" onChange={handleChanger} name="descricao" type="text" rows={2} required maxLength={500} /></label>
      </div>
    );
  }
}

export default ProfissionalForm;
