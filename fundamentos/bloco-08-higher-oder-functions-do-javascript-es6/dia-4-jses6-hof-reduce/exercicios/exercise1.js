const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  let newArray = [];
  arrays.forEach((element) => {
    element.reduce((_acc, curr) => {
      newArray.push(curr);
    }, 0);
  });
  return newArray;
}

console.log(flatten());

//--

function flattenReduce() {
  let newArray = arrays.reduce((acc, curr) => {
    curr.forEach(element => {
      acc.push(element);
    });
    return acc;
  }, []);
  return newArray;
}

console.log(flattenReduce());
