const button = document.querySelector('#btn');
const mostrador = document.querySelector('#mostrador');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1
  mostrador.innerHTML = `Número de cliques: ${clickCount}`;
});
