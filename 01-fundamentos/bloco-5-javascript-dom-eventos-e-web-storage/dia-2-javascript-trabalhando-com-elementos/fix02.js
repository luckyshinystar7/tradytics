// 1- Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = req01.parentElement;
pai.style.color = 'blue';

//  3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = 'Será que esse texto vai entrar? Entrou!';

// 4- Acesse o primeiroFilho a partir de pai .
pai.firstElementChild;

// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
ondeVoceEsta.previousElementSibling;

// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
ondeVoceEsta.parentElement.innerText;
//ou
ondeVoceEsta.nextSibling;
// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
ondeVoceEsta.nextElementSibling;

// 8- Agora acesse o terceiroFilho a partir de pai .
pai.lastElementChild.previousElementSibling;