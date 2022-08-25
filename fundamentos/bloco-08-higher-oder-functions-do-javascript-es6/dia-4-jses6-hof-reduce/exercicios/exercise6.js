const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  let newArray = students.map((elemento, index) => {
    return {
      name: elemento,
      average: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length
    };
  });
  return newArray;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());
console.log(JSON.stringify(studentAverage()) === JSON.stringify(expected));
