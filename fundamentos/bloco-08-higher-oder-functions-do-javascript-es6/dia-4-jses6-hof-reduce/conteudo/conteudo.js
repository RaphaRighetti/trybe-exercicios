const numbers = [50, 3, 4, 5, 6, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(`previous value ${bigger}`);
  console.log(`actual value ${number}`);
  return ((bigger > number) ? bigger : number);
}

const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85

// --

const newNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const expectedResult = 18 + 4 +76 + 54;

const sumOdd = newNumbers.reduce((total ,curr) => curr % 2 === 0 ? total + curr : total, 0);

console.log(sumOdd);
console.log(sumOdd === expectedResult);

//com filter

const sumOddFilter = newNumbers.filter((elemento) => elemento % 2 === 0).reduce((total, curr) => total + curr);
console.log(sumOddFilter);

// --

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const melhorMateria = estudantes.map((element) => {
  const materiaAluno = element.materias.reduce((valor, curr) => valor.nota > curr.nota ? valor : curr);
  return {
    name: element.nome,
    materia: materiaAluno.name
  };
})

console.log(melhorMateria);
