const books = require('./reference.js');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((element) => element.name.length === 26);
}

console.log(getNamedBook());
console.log(JSON.stringify(getNamedBook()) === JSON.stringify(expectedResult));
