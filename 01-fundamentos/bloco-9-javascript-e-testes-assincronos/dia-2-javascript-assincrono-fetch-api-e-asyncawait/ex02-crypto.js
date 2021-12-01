const fetch = require('node-fetch');
const API_URL = 'https://api.coincap.io/v2/assets';
let log = [];

// const append = (text) => {
//   const h2 = document.querySelector('h2');
//   h2.innerText = text;
// }

const fetchCoins = () => {
  const myObject = {
    method: 'GET',
    //headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data.data));
};

fetchCoins();


