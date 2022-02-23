import React from "react";

class DadJokeRevisando extends React.Component {
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

  // async fetchJoke() { // funciona mas não daria certo em funções não síncronas
  //   this.setState({loading: true})
  //   const requestHeaders = { headers: { Accept: 'application/json' } }
  //   const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
  //   const requestObject = await requestReturn.json();
  //   this.setState({
  //     jokeObj: requestObject,
  //     loading: false,
  //   })
  // }

  async fetchJoke() {
    this.setState({ loading: true }, async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
        loading: false,
      })
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState((prevState) => ({
      storedJokes: [...prevState.storedJokes, prevState.jokeObj]
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

        {loading ? loadingElement : this.renderJokeElement()}

      </div>
    );
  }
}

export default DadJokeRevisando;
