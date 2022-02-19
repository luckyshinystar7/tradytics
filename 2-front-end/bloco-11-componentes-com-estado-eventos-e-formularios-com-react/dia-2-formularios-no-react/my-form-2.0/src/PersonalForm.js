import React, { Component } from 'react'
import './App.css';
import { Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Container>
        Personal Form
        <Form >
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  placeholder='EXEMPLO DE OLIVEIRA'
                  id="nome" onChange={handleChanger}
                  value={currentState.nome}
                  name="nome"
                  type="text"
                  required
                  maxLength={40}
                />
              </Form.Group>
            </Col>
            <Col md="5">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder='exemplo@trybe.com'
                  id='email'
                  onChange={handleChanger}
                  name='email'
                  type="email"
                  required
                  maxLength={50} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  id='endereco'
                  placeholder='Rua das Pizzas, 321'
                  onChange={handleChanger}
                  value={currentState.endereco}
                  name='endereco'
                  type="text"
                  required
                  maxLength={200}
                />
              </Form.Group>
            </Col>
            <Col md='4'>
              <Form.Group>
                <Form.Label>CPF</Form.Label><Form.Control
                  id='cpf'
                  placeholder='12345678910'
                  onChange={handleChanger}
                  name='cpf'
                  type="number"
                  required
                  maxLength={11}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  id="cidade"
                  placeholder='Pirulito do Sul'
                  onChange={handleChanger}
                  name="cidade"
                  type="text"
                  required
                  maxLength={28}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  onChange={handleChanger}
                  name="estado">
                  {estados.map((estado) =>
                    <option
                      value={estado}
                      key={estado}>
                      {estado}
                    </option>
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" >
            <Form.Label>Tipo de Moradia</Form.Label>
            <Form.Check type="radio" onChange={handleChanger} name="tipo" value="casa" id="casa" label="Casa" required />
            <Form.Check type="radio" onChange={handleChanger} name="tipo" value="apto" id="apto" label="Apartamento" />
          </Form.Group>
        </Form >
      </Container>
    );
  }
}

export default PersonalForm;
