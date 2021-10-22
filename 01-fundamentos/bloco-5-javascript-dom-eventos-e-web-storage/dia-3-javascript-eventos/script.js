function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercicio 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const ul = document.querySelector("ul");
for (let i = 0; i < dezDaysList.length; i += 1) {
  let day = dezDaysList[i];
  let dayItem = document.createElement("li");
  dayItem.innerText = day;
  dayItem.className = "day";
  if (day == 24 || day == 25 || day == 31) {
    dayItem.className += " holiday";
  }
  if (day == 4 || day == 11 || day == 18 || day == 25) {
    dayItem.className += " friday";
  }
  ul.appendChild(dayItem)
}

//Exercicio 2

function holidayCreator(Feriados) {
let btnHoliday = document.createElement("button");
let btnContainer = document.querySelector(".buttons-container");
btnHoliday.id = 'btn-holiday';
btnHoliday.innerText = Feriados;
btnContainer.appendChild(btnHoliday);
}
// holidayCreator ("Dia de Relax 01"); teste de validacao da funcao
