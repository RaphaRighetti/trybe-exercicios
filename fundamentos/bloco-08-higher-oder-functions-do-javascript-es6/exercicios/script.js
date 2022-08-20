const cadastro = (nome) => {
  let arrNome = nome.split(' ');
  let emailObj = `${arrNome[0].toLowerCase()}`;
  let obj = {
    nomeCompleto: nome,
    email: '',
  };
  if (nome.length > 1) {
    for (let i = 1; i < arrNome.length; i += 1) {
      let newName = arrNome[i].toLowerCase();
      emailObj += `_${newName}`;
    }
  }
  emailObj += '@trybe.com';
  obj['email'] = emailObj;
  return obj;
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employees = newEmployees(cadastro);
console.log(employees);

//ex2
const sorteio = () => Math.floor(Math.random() * 5 + 1);

const aposta = (numApostado, func) => {
  const numSorteado = func();
  console.log(`Este foi o número apostado ${numApostado}`);
  console.log(`Este foi o número sorteado ${numSorteado}`);
  (numApostado === numSorteado) ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
};

aposta(3, sorteio);

//ex3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calcNota = (respostas, respostasAluno) => {
  let nota = 0;
  for (let i = 0; i < respostas.length; i += 1) {
    if (respostasAluno[i] === 'N.A') {
      nota += 0;
    } else if (respostas[i] === respostasAluno[i]) {
      nota += 1;
    } else if (respostas[i] !== respostasAluno[i]) {
      nota -= 0.5;
    }
  }
  return nota;
}

const notaFinal = (func, respostas, respostasAluno) => {
  let nota = 0;
  nota = func(respostas, respostasAluno);
  if (nota < 0) {
    nota = 0;
  }
  return nota;
}

console.log(notaFinal(calcNota, RIGHT_ANSWERS, STUDENT_ANSWERS));
