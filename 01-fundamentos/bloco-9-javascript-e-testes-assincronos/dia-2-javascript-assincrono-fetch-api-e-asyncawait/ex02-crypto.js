const API_URL = "https://api.coincap.io/v2/assets";

const append = (text) => {
  const h2 = document.querySelector('h2');
  h2.innerText = text;
}

const fetchJoke = () => {
  // const myObject = {
  //   method: 'GET',
  //   headers: { 'Accept': 'application/json' }
  // };
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => append(data));
};

fetchJoke();