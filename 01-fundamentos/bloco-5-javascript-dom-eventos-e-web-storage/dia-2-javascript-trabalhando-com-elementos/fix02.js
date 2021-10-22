//          Parte I

// 1- Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeVoceEsta.parentElement;
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

//          Parte II
// 1- Crie um irmão para elementoOndeVoceEsta .
let irmaoOnde = document.createElement('section');
irmaoOnde.id = 'irmaoOnde';
ondeVoceEsta.parentElement.appendChild(irmaoOnde);

// 2- Crie um filho para elementoOndeVoceEsta .
let filhoOnde = document.createElement('section');
ondeVoceEsta.appendChild(filhoOnde);
filhoOnde.id = 'filhoOnde';

// 3- Crie um filho para primeiroFilhoDoFilho .
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';

// 4- A partir desse filho criado, acesse terceiroFilho .
filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

//      Parte III

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
ondeVoceEsta.removeChild(filhoOnde);
ondeVoceEsta.firstElementChild.removeChild(filhoPrimeiroFilhoDoFilho);
const segundoEUltimo = document.querySelector('#segundoEUltimoFilhoDoFilho');
ondeVoceEsta.removeChild(segundoEUltimo);
pai.removeChild(document.getElementById("primeiroFilho"));
pai.removeChild(document.getElementById("irmaoOnde"));
pai.removeChild(document.querySelector("#quartoEUltimoFilho"));
pai.removeChild(document.querySelector("#terceiroFilho"));