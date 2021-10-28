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
const stateSelect = document.querySelector('#state');

for (let i = 0 ; i < brStates.length ; i += 1) {
  let opt = document.createElement('option');
  opt.text = brStates[i];
  stateSelect.appendChild(opt);
}