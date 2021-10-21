// 1- Acesse o elemento elementoOndeVoceEsta .
let req01 = document.getElementById('elementoOndeVoceEsta');

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
req01.parentElement.style.color = 'red';

//  3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = document.querySelector('#filhoDoFilho');
filhoDoFilho.innerHTML('Eu sou o neto');