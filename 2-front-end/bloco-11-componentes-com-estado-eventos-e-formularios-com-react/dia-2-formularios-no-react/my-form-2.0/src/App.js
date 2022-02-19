import React, { Component } from 'react'
import './App.css';
import PersonalForm from './PersonalForm';
import ProfissionalForm from './ProfissionalForm';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    let { value, name } = target;

    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = value.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, "");

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <fieldset>
          <PersonalForm handleChanger={this.handleChanger} currentState={this.state} />
        </fieldset>
        <fieldset>
          Profissional Form
          <ProfissionalForm handleChanger={this.handleChanger} currentState={this.state} />
        </fieldset>
        <Button>Enviar</Button>
      </div>
    )
  }
}













