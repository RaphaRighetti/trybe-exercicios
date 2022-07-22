let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let somaEx3 = 0;
let vezesMaior = 0;
let maiorNumero = 0;
let vezesImpar = 0;
let vezesMenor = 0;
let menorNumero = 0;
let array25 = [];

//ex1

for (let imprime = 0; imprime < numbers.length; imprime += 1) {
    console.log(numbers[imprime]);
}

//ex2

for (let somando = 0; somando < numbers.length; somando += 1) {
    soma += numbers[somando];
}

console.log(soma);

//ex3

for (let somandoEx3 = 0; somandoEx3 < numbers.length; somandoEx3 += 1) {
    somaEx3 += numbers[somandoEx3];
}

media = somaEx3 / numbers.length;

console.log(media);

//ex 4

if (media > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}

//ex5

for (let index = 0; index < numbers.length; index +=1) {
    vezesMaior = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] >= numbers[index2]) {
            vezesMaior += 1;
        }
    }
    if (vezesMaior === numbers.length) {
        maiorNumero = index;
        break;
    }
}

console.log(numbers[maiorNumero]);

//ex6

for (let indice = 0; indice < numbers.length; indice +=1) {
    if (numbers[indice] % 2 !== 0) {
        vezesImpar += 1;
    }
}

if (vezesImpar > 0) {
    console.log("existem",vezesImpar,"número(s) ímpar(es) nesta array!") ;
}
else if (vezesImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
}

//ex7

for (let indexEx7 = 0; indexEx7 < numbers.length; indexEx7 +=1) {
    vezesMenor = 0;
    for (let indexEx72 = 0; indexEx72 < numbers.length; indexEx72 += 1) {
        if (numbers[indexEx7] <= numbers[indexEx72]) {
            vezesMenor += 1;
        }
    }
    if (vezesMenor === numbers.length) {
        menorNumero = indexEx7;
        break;
    }
}

console.log(numbers[menorNumero]);

//ex8

for (let inserir = 1; inserir <= 25; inserir += 1) {
    array25.push(inserir);
}

console.log(array25);

//ex9 

for (let dividir = 0; dividir < array25.length; dividir += 1) {
    console.log(array25[dividir]/2);
}