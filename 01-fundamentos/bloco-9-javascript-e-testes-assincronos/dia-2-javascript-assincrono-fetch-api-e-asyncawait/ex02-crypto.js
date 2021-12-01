const fetch = require('node-fetch');
const API_URL = 'https://api.coincap.io/v2/assets';
// let log = [];

// const append = (text) => {
//   const h2 = document.querySelector('h2');
//   h2.innerText = text;
// }

const fetchCoins = async () => {
  // const myObject = {
  //   method: 'GET',
  //   headers: { 'Accept': 'application/json' }
  // };

  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => (data.data))
    .forEach((element) => console.log(`${element.name} ${element.symbol}: ${element.priceUsd}`))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));

  return result;
};

fetchCoins();


