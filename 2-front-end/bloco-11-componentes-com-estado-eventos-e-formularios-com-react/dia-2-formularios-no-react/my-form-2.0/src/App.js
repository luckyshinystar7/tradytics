import React, { Component } from 'react'
import './App.css';
import PersonalForm from './PersonalForm';
import ProfissionalForm from './ProfissionalForm';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: '',
  curriculo: '',
  cargo: '',
  descricao: '',
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_STATE;
    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger({ target }) {
    const { value, name } = target;
    (name === 'nome') ?
      this.setState({ [name]: value.toUpperCase() }) :
      this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <fieldset>
          Personal Form
          <PersonalForm handleChanger={this.handleChanger} currentState={this.state} />
        </fieldset>
        <fieldset>
          Profissional Form
          <ProfissionalForm handleChanger={this.handleChanger} currentState={this.state} />
        </fieldset>
      </div>
    )
  }
}













