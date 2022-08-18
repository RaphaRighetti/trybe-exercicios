const allLessons = {};

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adcChaveValor = (obj, chave, valor) => {
  obj[chave] = valor;
}

adcChaveValor(lesson2, 'turno', 'noite');

const imprimeChaves = obj => {
  let arrayObj = Object.keys(obj);
  for (let valor of arrayObj) {
    console.log(valor)
  }
}

imprimeChaves(lesson1);

const objLength = obj => {
  let arrayObj = Object.keys(obj);
  console.log(arrayObj.length);
}

objLength(lesson1);

const imprimeValores = (obj) => {
  let arrayObj = Object.values(obj);
  for (let valor of arrayObj) {
    console.log(valor)
  }
}

imprimeValores(lesson3);

allLessons['lesson1'] = Object.assign({}, lesson1);
allLessons['lesson2'] = Object.assign({}, lesson2);
allLessons['lesson3'] = Object.assign({}, lesson3);

const numStudents = obj => {
  let arrayLessons = Object.keys(allLessons);
  let numOfStudents = 0;
  for (let valores of arrayLessons) {
    numOfStudents += obj[valores]['numeroEstudantes'];
  }
  return numOfStudents;
}

console.log(numStudents(allLessons));

const indexObj = (obj, n) => {
  let arrayObj = Object.values(obj);
  return arrayObj[n];
}

console.log(indexObj(lesson1, 2));

const verifyPair = (obj, chave, valor) => {
  if (obj[chave] === valor) {
    return true;
  }
  return false;
}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));
