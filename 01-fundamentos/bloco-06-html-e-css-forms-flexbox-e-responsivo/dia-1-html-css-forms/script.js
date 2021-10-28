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
const btn = document.querySelector("#button");
const printElement = document.querySelector('#print');
const inputList = document.querySelectorAll(".required");

btn.addEventListener("click", function (e) {
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
