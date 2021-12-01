// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (text) => {
  const h2 = document.querySelector('h2');
  h2.innerText = text;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => append(data.joke));
};

fetchJoke();
