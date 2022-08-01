function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//ex1
function createDays() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.className = 'day';
    day.innerHTML = decemberDaysList[i];
    daysList.appendChild(day);
    if (i < 2) {
      day.className += ' previousMounth';
    }
    if (i >= 2 && (decemberDaysList[i] === 24) || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
      day.className += ' holiday';
    }
    if (i >= 2 && (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25)) {
      day.className += ' friday';
    }
  }
}

createDays();

//ex2
function criaBotao(feriados, id) {
  let botao = document.createElement('button');
  const divButtons = document.querySelector('.buttons-container');
  botao.id = id;
  divButtons.appendChild(botao);
  botao.innerHTML = feriados;
}

criaBotao('Feriados', 'btn-holiday');

//ex3
// let holidayColor = document.getElementsByClassName('holiday');
// for (let i = 0; i < holidayColor.length; i += 1) {
//   holidayColor[i].style.backgroundColor = 'rgb(238,238,238)';
// }
let alternanciaHoliday = 1;

const botaoFeriados = document.getElementById('btn-holiday');
botaoFeriados.addEventListener('click', function () {
  
  let holiday = document.getElementsByClassName('holiday');
  alternanciaHoliday += 1;
  
  for (let i = 0; i < holiday.length; i += 1) {
    if (alternanciaHoliday % 2 === 0) {
      holiday[i].style.backgroundColor = 'white';
    }
    else if (alternanciaHoliday % 2 !== 0) {
      holiday[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

//ex4
criaBotao('Sexta-feira', 'btn-friday');

//ex5
const fridayList = document.getElementsByClassName('friday');
let fridayArray = [];
for (i = 0; i < fridayList.length; i += 1) {
  fridayArray.push(fridayList[i].innerHTML);
}

const botaoFriday = document.getElementById('btn-friday');

botaoFriday.addEventListener('click', function () {
  let newFriday = document.getElementsByClassName('friday');
  for (let i = 0; i < newFriday.length; i += 1) {
    if (fridayArray[i] === newFriday[i].innerHTML) {
      newFriday[i].innerHTML = 'SEXTOU!';
    }
    else {
      newFriday[i].innerHTML = fridayArray[i];
    }
  }
});

//ex6
function destaca(event) {
  event.target.style.fontSize = '24px';
  event.target.style.fontWeight = '600';
}

function tiraDestaque(event) {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '400';
}

const allDays = document.getElementsByClassName('day');

// for (let value of allDays) {
//   value.addEventListener('mouseover', destaca);
//   value.addEventListener('mouseleave', tiraDestaque);
// }

for (let i = 2; i < allDays.length; i += 1) {
  allDays[i].addEventListener('mouseover', destaca);
  allDays[i].addEventListener('mouseleave', tiraDestaque);
}

//ex7
function criaTarefa(tarefa) {
  let taskTag = document.createElement('span');
  taskTag.innerHTML = tarefa
  document.querySelector('.my-tasks').appendChild(taskTag);
}

criaTarefa('Projeto:');

//ex8
function colorTask(cor) {
  let divTaskColor = document.createElement('div');
  divTaskColor.className = 'task';
  divTaskColor.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(divTaskColor);
}

colorTask('green');

//ex9
const divSelectColor = document.querySelector('.task');
let alternanceTaskColor = 1;
  
divSelectColor.addEventListener('click', function () {
  alternanceTaskColor += 1;
  if (alternanceTaskColor % 2 === 0) {
    divSelectColor.className = 'task selected';
  }
  else   if (alternanceTaskColor % 2 !== 0) {
    divSelectColor.className = 'task';
  }
});

//ex10
function dayChangeColor(event) {
  let colorChange = document.querySelector('.selected');
  console.log(colorChange)
  if (colorChange !== null && colorChange.style.backgroundColor !== event.target.style.color) {
    event.target.style.color = colorChange.style.backgroundColor;
  }
  else {
    event.target.style.color = 'rgb(119, 119, 119)';
  }
}

for (let i = 2; i < allDays.length; i += 1) {
  allDays[i].addEventListener('click', dayChangeColor);
}

//bonus
function addTask() {
  let createTask = document.createElement('li');
  let inputTaskBox = document.getElementById('task-input');
  let taskListContainer = document.querySelector('.task-list-container ul');
  if (inputTaskBox.value === '') {
    alert('Erro! Insira uma tarefa válida.');
  }
  else {
    createTask.innerHTML = inputTaskBox.value;
    taskListContainer.appendChild(createTask);
    inputTaskBox.value = '';
  }
}

const buttonAdd = document.getElementById('btn-add');

buttonAdd.addEventListener('click', addTask);

function pressEnter(event) {
  let x = event.key;
  if (x === 'Enter') {
    console.log('tafunfando');
    addTask();
  }
}

let inputTaskText = document.getElementById('task-input');
inputTaskText.addEventListener('keydown', pressEnter);
