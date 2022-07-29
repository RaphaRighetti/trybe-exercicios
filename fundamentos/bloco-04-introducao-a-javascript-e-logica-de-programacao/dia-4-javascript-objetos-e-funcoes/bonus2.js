let vetor = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let oddVector = [];
  for (let value of vector) {
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] % 2 === 0) {
        oddVector.push(value[i]);
      }
    }
  }
  return oddVector;
}

console.log(arrayOfNumbers(vetor));