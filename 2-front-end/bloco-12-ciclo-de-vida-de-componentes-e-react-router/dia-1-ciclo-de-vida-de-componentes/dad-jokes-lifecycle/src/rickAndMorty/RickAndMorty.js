// App.js
import React, { Component }from 'react';
import './RickAndMorty.css';

class RickAndMorty extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
      </div>
    );
  }
}

export default RickAndMorty;