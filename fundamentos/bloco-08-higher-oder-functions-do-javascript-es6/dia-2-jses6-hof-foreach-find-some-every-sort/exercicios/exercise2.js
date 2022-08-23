const books = require('./reference.js');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach(element => {
    if (!nameBook || nameBook.length > element.name.length) {
      nameBook = element.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());
