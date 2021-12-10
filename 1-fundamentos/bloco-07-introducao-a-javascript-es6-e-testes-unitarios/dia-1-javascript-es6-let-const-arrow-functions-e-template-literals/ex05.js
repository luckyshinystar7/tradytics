// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const button = document.querySelector('#btn');
const mostrador = document.querySelector('#mostrador');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1
  mostrador.innerHTML = `Número de cliques: ${clickCount}`;
});
