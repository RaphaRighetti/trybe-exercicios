//ex1

function ehPalindromo(palavra) {
    let novaPalavra = palavra.split('').reverse().join('');
    if (novaPalavra === palavra) {
        return true;
    }
    return false;
}

console.log(ehPalindromo('arara'));

//ex2

let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorIndice(parametro) {
 let maiorIndex = 0;
 for (let index in parametro) {
    if (parametro[maiorIndex] < parametro[index]) {
        maiorIndex = index;
    }
 }
 return maiorIndex;
}

console.log(maiorIndice(arrayTeste));

//ex3

let arrayTesteDois = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(parametro) {
 let menorIndex = 0;
 for (let index in parametro) {
    if (parametro[menorIndex] > parametro[index]) {
        menorIndex = index;
    }
 }
 return menorIndex;
}

console.log(menorIndice(arrayTesteDois));

//ex4

let nomesTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maisLetras(palavras) {
    let numLetras = "";
    for (let index in palavras)
    if (palavras[index].length > numLetras.length) {
        numLetras = palavras[index];
    }
    return numLetras;
}

console.log(maisLetras(nomesTeste));

//ex5

let arrayTesteTres = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
    let arrayRapetidos = [];
    for (let values of numeros) {
        let numRepeticoes = 0;
        for (let valores of numeros) {
            if (values === valores) {
                numRepeticoes += 1;
            }
            arrayRapetidos.push(numRepeticoes);
        }
    }
    return numeros[maiorIndice(arrayRapetidos)];
}

console.log(maisRepetido(arrayTesteTres));

//ex6

let n = 5;

function somaNum(num) {
    if (num > 0 && Number.isInteger(num)) {
        for (let index = num - 1; index >= 1; index -= 1) {
            num += index;
        }
        return num
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return "adicione um numero natural";
    } 
}

console.log(somaNum(n));

//ex7

function finalPalavra(word, ending) {
    if (word.length <= ending.length && ending.length > 0) {
        return "O final da palavra deve conter algum caractere, e tem q ser menor que a palavra!";
    }
    else {
        let newWord = "";
        let newEnding = "";
        for (let index = word.length - 1; index >= word.length - ending.length ; index -= 1) {
            newWord += word[index];
        }
        for (let index2 = ending.length - 1; index2 >= 0; index2 -= 1) {
            newEnding += ending[index2];
        }
        if (newWord === newEnding) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(finalPalavra('Trybe', 'be'));

console.log(finalPalavra('joaofernando', 'fernan'));