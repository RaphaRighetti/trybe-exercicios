//ex1

const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//ex2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function getSmallerNumber (arrayToGet) {
  let newFirstNumber = arrayToGet[0];
  for (let i = 0; i < arrayToGet.length; i += 1) {
    if (arrayToGet[i] < newFirstNumber) {
      newFirstNumber = arrayToGet[i];
    }
  }
  return newFirstNumber;
}

function getLargerNumber (arrayToGet) {
  let lastNumber = arrayToGet[0];
  for (let value of oddsAndEvens) {
    if (value > lastNumber) {
      lastNumber = value
    }
  }
  return lastNumber;
}

function getMidNumbers (newFirstNumber, arrayToGet) {
  let newNumber = getLargerNumber(arrayToGet);
  for (let index = 0; index < arrayToGet.length; index += 1) {
    if (arrayToGet[index] > newFirstNumber) {
      if (arrayToGet[index] <= newNumber) {
        newNumber = arrayToGet[index];
      }
    }
  }
  return newNumber;
}

function sortArray(arrayToGet) {
  let newArray = [];
  newArray.push(getSmallerNumber(arrayToGet));
  for (let i = 1; i < arrayToGet.length; i += 1) {
    let newFirstNumber = newArray[i - 1];
    newArray.push(getMidNumbers(newFirstNumber, arrayToGet));
  }
  return newArray;
}

const oddsAndEvensSorted = sortArray(oddsAndEvens);

console.log(oddsAndEvensSorted); // será necessário alterar essa linha 😉

//bonus

let oddsSorted = oddsAndEvens.slice();

oddsSorted.sort((a, b) => {
  if (a > b){
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
})

console.log(oddsSorted);
