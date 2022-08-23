const books = require('./reference.js');

function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find(element => element.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());
