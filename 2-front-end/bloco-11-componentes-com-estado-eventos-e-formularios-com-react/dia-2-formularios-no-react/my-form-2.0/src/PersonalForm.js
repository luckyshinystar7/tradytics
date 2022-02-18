import React, { Component } from 'react'
import './App.css';

const estados = [
  '',
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins',
];

class PersonalForm extends Component {
  render() {
    const { handleChanger, currentState } = this.props;
    return (
      <div className="App">
        <label>Nome<input id="nome" onChange={handleChanger} value={currentState.nome} name="nome" type="text" required maxLength={40} /></label>
        <label>Email<input id='email' onChange={handleChanger} name='email' type="email" required maxLength={50} /></label>
        <label>CPF<input id='cpf' onChange={handleChanger} name='cpf' type="number" required maxLength={11} /></label>
        <label>Endereço<input id='endereco' onChange={handleChanger} name='endereco' type="text" required maxLength={200} /></label>
        <label>Cidade<input id="cidade" onChange={handleChanger} name="cidade" type="text" required maxLength={28} /></label>
        <label>Estado<select onChange={handleChanger} name="estado">
          {estados.map((estado) => <option value={estado} key={estado}>{estado}</option>)}
        </select>
        </label>
        <div>
          Tipo<br></br>
          <label htmlFor="casa">Casa</label>
          <input type="radio" onChange={handleChanger} name="tipo" value="casa" id="casa" required />
          <label htmlFor='apto'>Apartamento</label>
          <input type="radio" onChange={handleChanger} name="tipo" value="apto" id="apto" />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
