const books = require('./reference.js');

const expectedResult = false;

function authorUnique() {
  let condition = true;
  // escreva seu código aqui
  books.forEach(element => {
    let count = 0;
    books.forEach(elemento => {
      if (element.author.birthYear === elemento.author.birthYear) {
        count += 1;
      }
    });
    if (count > 1) {
      condition = false;
    }
  });
  return condition;
}

console.log(authorUnique());
console.log(authorUnique() === expectedResult);
