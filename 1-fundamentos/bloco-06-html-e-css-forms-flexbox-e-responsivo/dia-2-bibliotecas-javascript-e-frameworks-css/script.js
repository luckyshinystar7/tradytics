const brStates = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
const stateSelect = document.querySelector("#state");

for (let i = 0; i < brStates.length; i += 1) {
  let opt = document.createElement("option");
  opt.text = brStates[i];
  stateSelect.appendChild(opt);
}

// Logo abaixo do formulário, crie um botão que:
// Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
// Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
// Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
// Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
const btnSubmit = document.querySelector("#button");
const printElement = document.querySelector("#print");
const inputList = document.querySelectorAll(".required");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let content = "";
  let print;
  for (let i = 0; i < inputList.length; i += 1) {
    if (inputList[i].value == "") {
      print = `${inputList[i].id} é um requisito obrigatório`;
      break;
    } else {
      content = content + ", " + inputList[i].value;
      print = content;
    }
  }
  printElement.innerText = print;
});

// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

const btnClear = document.querySelector("#clear");

btnClear.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].value = "";
  }
  printElement.innerText = "";
});
