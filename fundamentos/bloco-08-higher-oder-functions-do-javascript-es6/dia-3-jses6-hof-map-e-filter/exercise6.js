const books = require("./module");

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  let oldBooksNames = books.filter((element) => 2022 - element.releaseYear > 60)
  .map((element) => element.name);
  return oldBooksNames;
}

console.log(oldBooks());
console.log(JSON.stringify(oldBooks()) === JSON.stringify(expectedResult));
