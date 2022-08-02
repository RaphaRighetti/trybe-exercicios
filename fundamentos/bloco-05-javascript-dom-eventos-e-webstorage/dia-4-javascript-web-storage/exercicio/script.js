const mainTag = document.querySelector('main');
const bodyTag = document.querySelector('body');
const backColor = document.getElementById('backColor');
const textColor = document.getElementById('textColor');
const textSize = document.getElementById('textSize');
const lineSize = document.getElementById('lineSize');
const textType = document.getElementById('textType');

if (localStorage['corDeFundo'] === undefined) {
  localStorage['corDeFundo'] = 'white';
}
bodyTag.style.backgroundColor = localStorage['corDeFundo'];

if (localStorage['corDoTexto'] === undefined) {
  localStorage['corDoTexto'] = 'black';
}
mainTag.style.color = localStorage['corDoTexto'];

if (localStorage['tamanhoDoTexto'] === undefined) {
  localStorage['tamanhoDoTexto'] = '1em';
}
mainTag.style.fontSize = localStorage['tamanhoDoTexto'];

if (localStorage['alturaDaLinha'] === undefined) {
  localStorage['alturaDaLinha'] = '1.2em';
}
mainTag.style.lineHeight = localStorage['alturaDaLinha'];

if (localStorage['tipoDeFonte'] === undefined) {
  localStorage['tipoDeFonte'] = 'Helvetica';
}
mainTag.style.fontFamily = localStorage['tipoDeFonte'];

function changeBackground(e) {
  const x = e.key;
  if (x == 'Enter') {
    localStorage['corDeFundo'] = e.target.value
    bodyTag.style.backgroundColor = localStorage['corDeFundo'];
    e.target.value = '';
  }
}

backColor.addEventListener('keydown', changeBackground);

function changeTextColor(e) {
  const x = e.key;
  if (x == 'Enter') {
    localStorage['corDoTexto'] = e.target.value
    mainTag.style.color = localStorage['corDoTexto'];
    e.target.value = '';
  }
}

textColor.addEventListener('keydown', changeTextColor);

function changeTextSize(e) {
  const x = e.key;
  if (x == 'Enter') {
    localStorage['tamanhoDoTexto'] = e.target.value
    mainTag.style.fontSize = localStorage['tamanhoDoTexto'];
    e.target.value = '';
  }
}

textSize.addEventListener('keydown', changeTextSize);

function changeLineSize(e) {
  const x = e.key;
  if (x == 'Enter') {
    localStorage['alturaDaLinha'] = e.target.value
    mainTag.style.lineHeight = localStorage['alturaDaLinha'];
    e.target.value = '';
  }
}

lineSize.addEventListener('keydown', changeLineSize);

function changeFontFamily(e) {
  const x = e.key;
  if (x == 'Enter') {
    localStorage['tipoDeFonte'] = e.target.value
    mainTag.style.fontFamily = localStorage['tipoDeFonte'];
    e.target.value = '';
  }
}

textType.addEventListener('keydown', changeFontFamily);
