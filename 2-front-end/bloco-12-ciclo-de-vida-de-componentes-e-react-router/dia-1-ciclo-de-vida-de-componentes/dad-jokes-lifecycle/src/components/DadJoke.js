// // REUSMO:
// como fazemos para garantir que algo só rode depois do estado ser atualizado! Passamos como segundo parâmetro da this.setState uma callback com a dita lógica!

// this.setState({ meuEstado: novoValor }, () => {
//   // ... Sua lógica aqui
// })

// // E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?! Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!

// this.setState(
//   (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
//   () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
// )

import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <p>{loading ? loadingElement : this.renderJokeElement() }</p>

      </div>
    );
  }
}

export default DadJoke;
