const books = require('./module.js');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const authors = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
  .map((element) => element.author.name);
  authors.sort();
  return authors;
}

console.log(fantasyOrScienceFictionAuthors());
console.log(JSON.stringify(fantasyOrScienceFictionAuthors()) === JSON.stringify(expectedResult));
