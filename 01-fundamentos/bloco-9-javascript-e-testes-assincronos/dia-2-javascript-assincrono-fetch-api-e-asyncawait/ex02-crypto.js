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
  try {
    const response = await fetch(API_URL)
    const data = await response.json();
    const element = data.data;
    element.forEach((element) => console.log(`${element.name} (${element.symbol}): ${element.priceUsd}`));

  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }

  // return result;
};

fetchCoins();


