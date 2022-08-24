const books = require('./module.js');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const nomeLivro = books.find((element) => element.author.name.split('.').length === 4);
  return nomeLivro.name;
}

console.log(authorWith3DotsOnName());
console.log(authorWith3DotsOnName() === expectedResult);

console.log('J. R. R. Tolkien'.split('.'));
