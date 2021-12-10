const btnBackgroundColor = document.getElementById("btnBackgroundColor");
const btnTextColor = document.getElementById("btnTextColor");
const btnFontSize = document.getElementById("btnFontSize");
const btnLineHeight = document.getElementById("btnLineHeight");
const btnFontFamily = document.getElementById("btnFontFamily");

const inputBackgroundColor = document.getElementsByClassName("input")[0];
const inputTextColor = document.getElementsByClassName("input")[1];
const inputFontSize = document.getElementsByClassName("input")[2];
const inputLineHeight = document.getElementsByClassName("input")[3];
const inputFontFamily = document.getElementsByClassName("input")[4];

const body = document.querySelector("body");

btnBackgroundColor.addEventListener("click", function () {
  body.style.background = inputBackgroundColor.value;
  localStorage.input1 = inputBackgroundColor.value;
});

const main = document.querySelector("main");

btnTextColor.addEventListener("click", function () {
  main.style.color = inputTextColor.value;
  localStorage.input2 = inputTextColor.value;
});

btnFontSize.addEventListener("click", function () {
  main.style.fontSize = inputFontSize.value;
  localStorage.input3 = inputFontSize.value;
});

btnLineHeight.addEventListener("click", function () {
  main.style.lineHeight = inputLineHeight.value;
  localStorage.input4 = inputLineHeight.value;
});

btnFontFamily.addEventListener("click", function () {
  main.style.fontFamily = inputFontFamily.value;
  localStorage.input5 = inputFontFamily.value;
});

let input1Storage = localStorage.input1;
let input2Storage = localStorage.input2;
let input3Storage = localStorage.input3;
let input4Storage = localStorage.input4;
let input5Storage = localStorage.input5;

if (input1Storage === undefined) {
  input1Storage = "white";
  localStorage.input1 = input1Storage;
} else {
  body.style.background = input1Storage;
}

if (input2Storage === undefined) {
  input2Storage = "black";
  localStorage.input2 = input2Storage;
} else {
  main.style.color = input2Storage;
}

if (input3Storage === undefined) {
  input3Storage = "16px";
  localStorage.input3 = input3Storage;
} else {
  main.style.fontSize = input3Storage;
}

if (input4Storage === undefined) {
  input4Storage = "15px";
  localStorage.input4 = input4Storage;
} else {
  main.style.lineHeight = input4Storage;
}

if (input5Storage === undefined) {
  input5Storage = "Times New Roman";
  localStorage.input5 = input5Storage;
} else {
  main.style.fontFamily = input5Storage;
}
