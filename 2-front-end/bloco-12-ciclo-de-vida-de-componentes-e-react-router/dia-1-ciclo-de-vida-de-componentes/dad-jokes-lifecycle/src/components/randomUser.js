import React from "react";

class RandomUser extends React.Component {
  constructor(props) {
    super(props)

    this.fetchRandomUser = this.fetchRandomUser.bind(this);

    this.state = {
      randomProfile: undefined,
    }
  }

  async fetchRandomUser() {
    this.setState(
      { randomProfile: undefined },
      async () => {
        // const requestHeaders = { headers: { dataType: 'json' } }
        const requestReturn = await fetch('https://api.randomuser.me/')
        const requestObject = await requestReturn.json();
        this.setState({ randomProfile: requestObject });
      });
  }

componentDidMount() {
  this.fetchRandomUser();
}

  render() {
    return (
      <div>
        <p>Perfil aleatório</p>
        <button>Novo Usuário</button>
      </div>
    )
  }

}

export default RandomUser;
