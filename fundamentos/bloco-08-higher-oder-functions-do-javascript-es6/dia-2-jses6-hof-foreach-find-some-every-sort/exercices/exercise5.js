const books = require('./reference.js');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear < 2001);
}

console.log(everyoneWasBornOnSecXX());
console.log(everyoneWasBornOnSecXX() === expectedResult);
