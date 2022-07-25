//ex1

let numfatorar = 5;
let fatoracao = 1;

if (numfatorar > 0) {
for (let index = numfatorar; index >= 1; index -= 1) {
  fatoracao *= index;
}
console.log(fatoracao);
}
else if (numfatorar === 0) {
    fatoracao = 0;
    console.log(fatoracao);
}
else {
    console.log("insira um valor positivo.")
}

//ex2

let word = "tryber";
let word2 = "";

for (let index = word.length -1; index >= 0; index -= 1) {
word2 += word[index];
}

console.log(word2);

//ex3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
let menorPalavra = array[0];
 
for (let index = 0; index < array.length; index += 1) {
if (array[index].length > maiorPalavra.length) {
maiorPalavra = array[index];
}
}

console.log(maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
if (array[index].length < menorPalavra.length) {
menorPalavra = array[index];
}
}

console.log(menorPalavra);


//ex4

let maior = 0;
let numerosPrimos = [];
let quantDivisores = 0;

for (let index = 2; index <= 50; index += 1) {
    quantDivisores = 0;
    for (let index2 = index; index2 >= 2; index2 -= 1) {
    if (index % index2 === 0) {
    quantDivisores += 1;
    }
    }
    if (quantDivisores === 1) {
        numerosPrimos.push(index);
     }
    }

     console.log(numerosPrimos[numerosPrimos.length - 1]);