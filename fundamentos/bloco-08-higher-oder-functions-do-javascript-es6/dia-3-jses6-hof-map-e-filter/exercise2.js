const books = require('./module.js');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  let newObj = books.map((element) => {
    let obj =  { 
    age: element.releaseYear - element.author.birthYear,
    author: element.author.name,
  };
  return obj;
  })
  newObj.sort((a, b) => a.age - b.age);
  return newObj;
}

const newObj = nameAndAge();
console.log(newObj);
console.log(JSON.stringify(newObj) === JSON.stringify(expectedResult));
