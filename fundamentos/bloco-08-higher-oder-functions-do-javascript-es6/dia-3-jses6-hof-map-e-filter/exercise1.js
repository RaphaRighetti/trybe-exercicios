const books = require('./module.js');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((element => `${element.name} - ${element.genre} - ${element.author.name}`))
}

const formatedBooks = formatedBookNames();

console.log(formatedBooks);
console.log(JSON.stringify(formatedBooks) === JSON.stringify(expectedResult));
