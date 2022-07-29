//o programa deduz que sempre recebera uma string com um algarismo romano valido, para ele reconhecer que não foi enviado um algarismo romano é necessário aprimorar o código.
const romainTable = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romainToIntegrer(romain) {
  romain = romain.toUpperCase();
  let finalNum = 0;
  for (let i = 0; i < romain.length; i += 1) {
    let testeFor = finalNum
    for (let key in romainTable) {
      if (romain[i] + romain[i + 1] == key) {
        finalNum += romainTable[key];
        i += 1;
      }
    }
    if (testeFor === finalNum) {
      for (let key in romainTable) {
        if (romain[i] == key) {
          finalNum += romainTable[key];
        }
      }
    }
  }
  return finalNum;
}

console.log(romainToIntegrer('MMDCCXIII'));
