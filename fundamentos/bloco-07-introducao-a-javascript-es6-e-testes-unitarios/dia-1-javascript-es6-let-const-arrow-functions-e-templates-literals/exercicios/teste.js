let frase = 'vai todo mundo toma no meio do cu'

function maiorPalavra(frase) {
  const arrayFrase = frase.split(' ');
  let bigWord = arrayFrase[0];
  for (let value of arrayFrase) {
    if (value.length > bigWord.length) {
      bigWord = value;
    }
  }
  return bigWord;
}

console.log(maiorPalavra(frase));
