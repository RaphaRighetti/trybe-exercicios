const books = require('./reference.js');

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const totalAges = books.reduce((acc, curr) => acc + curr.releaseYear - curr.author.birthYear, 0);
  let average = totalAges / books.length;
  return average;
}

console.log(averageAge());
console.log(averageAge() === expectedResult);
