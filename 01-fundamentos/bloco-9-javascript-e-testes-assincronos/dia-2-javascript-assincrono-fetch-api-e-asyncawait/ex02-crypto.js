// const fetch = require('node-fetch');
const API_URL = 'https://api.coincap.io/v2/assets';

const append = (text) => {
  const h1 = document.querySelector('h1');
  const p = document.createElement('ul');
  p.innerText = text;
  p.style.fontSize = '0.5em';
  p.style.margin = '0.5px';
  p.style.fontWeight = 'normal';
  h1.appendChild(p);
}

const fetchCoins = async () => {

  try {
    const response = await fetch(API_URL)
    const data = await response.json();
    const element = data.data;
    // element.forEach((element) => console.log(`${element.name} (${element.symbol}): ${element.priceUsd}`));
    element.forEach((element, i) => {
      if (i < 10) return append(`${element.name} (${element.symbol}): ${parseFloat(element.priceUsd).toFixed(2)}`);
    });

  } catch (error) {
    append(`Algo deu errado :( \n${error}`);
    // console.log(`Algo deu errado :( \n${error}`);
  }

};

fetchCoins();


