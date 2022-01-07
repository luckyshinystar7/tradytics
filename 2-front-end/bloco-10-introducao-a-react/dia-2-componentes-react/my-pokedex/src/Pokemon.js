import React from "react";
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
      const { poke: {name, type, averageWeight, image} } = this.props;
    return (
    <div className="pokemonCard">
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
         <img source={image} alt={name} />
    </div>
    );
  }
}

export default Pokemon;
