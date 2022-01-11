import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.changeErrorStatus = this.changeErrorStatus.bind(this);

    this.state = {
      estadoFavorito: '',
      formularioComErros: false,
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  changeErrorStatus = () => {
    this.setState({formularioComErros: true})
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;
