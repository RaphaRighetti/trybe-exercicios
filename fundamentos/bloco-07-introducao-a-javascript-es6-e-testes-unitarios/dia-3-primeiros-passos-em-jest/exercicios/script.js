function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const codificador = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function codificar(frases, index2) {
  for (let key in codificador) {
    if (frases[index2] === key) {
      frases = frases.replace(key, codificador[key]);
    }
  }
  return frases;
}

function encode(frase) {
  for (let index = 0; index < frase.length; index += 1) {
    frase = codificar(frase, index);
  }
  return frase;
}

function decodificar(frases, index2) {
  for (let key in codificador) {
    if (frases[index2] === codificador[key]) {
      frases = frases.replace(codificador[key], key);
    }
  }
  return frases;
}

function decode(frase) {
  for (let index = 0; index < frase.length; index += 1) {
    frase = decodificar(frase, index);
  }
  return frase;
}

function criandoLista(techNames, personName) {
  let newArray = [];
  for (let index = 0; index < techNames.length; index += 1) {
    newArray.push({ tech: '', name: '' });
    newArray[index].tech = techNames[index];
    newArray[index].name = personName;
  }
  newArray = newArray.sort(function (a, b) {
    return a.tech.localeCompare(b.tech);
  });
  return newArray;
}

function techList(techNames, personName) {
  if (techNames === undefined || personName === undefined
    || techNames.length <= 0 || personName.length <= 0) {
    return 'Vazio!';
  }
  let newArray = [];
  newArray = criandoLista(techNames, personName);
  return newArray;
}

function getNum(phrase) {
  let reg = /\d+/g;
  let result = phrase.match(reg);
  return result;
}

function sumNumPhrase(phrase) {
  let numArray = getNum(phrase);
  let result = 0;
  for (let value of numArray) {
    result += Number(value);
  }
  return result;
}

function hydrate(phrase) {
  let numWater = Number(sumNumPhrase(phrase));
  if (numWater === 1) {
    let phraseResult = `${numWater} copo de água`;
    return phraseResult;
  }
  let phraseResult = `${numWater} copos de água`;
  return phraseResult;
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
