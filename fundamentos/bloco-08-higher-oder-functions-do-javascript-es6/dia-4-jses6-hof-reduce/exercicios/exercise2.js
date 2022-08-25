const books = require('./reference.js');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  let namesPhrase = books.reduce((acc, curr) => `${acc}${curr.author.name}, `, '');
  namesPhrase = namesPhrase.slice(0, -2);
  namesPhrase += '.';
  return namesPhrase;
}

console.log(reduceNames());
console.log(reduceNames() === expectedResult);
