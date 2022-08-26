// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'açaí'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite ninho', 'leite condensado', 'granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//--


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const person = {
  ...user,
  ...jobInfos
};

const {name: nome, age, nationality, profession, squad, squadInitials} = person;

console.log(`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// --

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao1, saudacao2] = saudacoes;
saudacao2(saudacao1);

// --

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// let arrayCerta = [comida, animal, bebida];

// const [animal, bebida, comida] = [a, b, c];

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// --

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [numerosPares] = [numerosPares.filter((e) => e % 2 === 0)];

const [a, b, c, ...even] = numerosPares;
numerosPares = even;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// --

const person2 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality2 = 'BR'} = person2;
console.log(nationality2);
console.log(person2);

// --

const getNationality = (obj) => {
  const {firstName, nationality3 = 'Brazilian'} = obj;
  return `${firstName} is ${nationality3}`;
};

const person3 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality3: 'Russian',
};

const {firstName = 'salve', nationality3 = 'Brazilian'} = person3;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person3));

//--

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

// --

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(8));
  