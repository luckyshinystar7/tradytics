
const btnBackgroundColor = document.getElementById('btnBackgroundColor');
const btnTextColor = document.getElementById('btnTextColor');
const btnFontSize = document.getElementById('btnFontSize');
const btnLineHeight = document.getElementById('btnLineHeight');
const btnFontFamily = document.getElementById('btnFontFamily');

const inputBackgroundColor = document.getElementsByClassName('input')[0];
const inputTextColor = document.getElementsByClassName('input')[1];
const inputFontSize = document.getElementsByClassName('input')[2];
const inputLineHeight = document.getElementsByClassName('input')[3];
const inputFontFamily = document.getElementsByClassName('input')[4];

const body = document.querySelector('body');

btnBackgroundColor.addEventListener('click', function (){
  body.style.background = inputBackgroundColor.value;
})

const main = document.querySelector('main');

btnTextColor.addEventListener('click', function (){
  main.style.color = inputTextColor.value;
})