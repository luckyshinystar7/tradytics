import React from 'react';

const MyContext = React.createContext('MyContext');

class Context02 extends React.Component {
  componentDidMount() {
    // const value = this.context;
    // ...
  }

  render() {
    const value = this.context;
    // ...
    return <p>{` Olá, sou o ${value} fui renderizado pelo contextType `}</p>
  }
}

Context02.contextType = MyContext;

export default Context02;
