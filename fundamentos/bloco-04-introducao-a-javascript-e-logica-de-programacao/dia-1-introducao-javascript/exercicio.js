const a = 10;
const b = 5;
const c = 2;
let soma = 0;
let subtracao = 0;
let multiplicacao = 1;
let divisao = 1;
let modulo = 0;
let peca = "CAVALO"
let percent = 77;
const v = true;
const f = false;
const custo = 100;
const venda = 220;
let lucro = 0;
let bruto = 3000;
let brutoInss = 0;
let liquido = 0;


//EX1
// soma

soma = a + b;
console.log(soma);

// subtração

subtracao = a - b;
console.lob(subtracao);

// multiplicação

multiplicacao = a * b;
console.lob(multiplicacao);

// divisão

divisao = a / b;
console.log(divisao);

// módulo

modulo = a % b;
console.log(modulo);

//EX2

if (a > b) {
    console.log(a);
}
else if (b > a) {
    console.log(b);
}
else if (a === b) {
console.log("os números são iguais");
}

//EX3

if (a >= b && a >= c) {
    if (a > b && a > c) {
      console.log(a);  
    }
    else if ((a === b && a > c) || (a > b && a === c) || (a === b && a === c)) {
        console.log("os maiores valores são iguais " + a);
    }
}

else if (b >= a && b >= c) {
    if (b > a && b > c) {
      console.log(b);  
    }
    else if ((b === a && b > c) || (b > a && b === c) || (a === b && b === c)) {
        console.log("os maiores valores são iguais " + b);
    }
}

else if (c >= b && c >= a) {
    if (c > b && c > a) {
      console.log(c);  
    }
    else if ((c === b && c > a) || (c > b && a === c) || (c === b && a === c)) {
        console.log("os maiores valores são iguais " + c);
    }
}

//EX4

if (a > 0) {
    console.log("positive");
}
else if (a < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//EX5

if ((a <= 0 && a >= 180) || (b <= 0 && b >= 180) || (c <= 0 && c >= 180)) {
    console.log("Erro. Retorne ângulos validos.");
}
else if (a + b + c === 180) {
console.log("São ângulos internos de um triângulo.");
}
else {
    console.log("Não são ângulos internos de um triângulo.")
}

//EX6

peca = peca.toLowerCase();

if (peca === "peão" || peca === "peao") {
console.log("Peões se movem somente para frente, uma casa por vez.");
}
else if (peca === "bisbo") {
    console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro.");
}
else if (peca === "torre") {
    console.log("A torre se move em linha reta horizontalmente e verticalmente.");
}
else if (peca === "cavalo") {
    console.log("O movimento do cavalo forma um “L”.");
}
else if (peca === "rainha") {
    console.log("A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
}
else if (peca === "rei") {
    console.log("O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
}
else {
    console.log("Erro. Insira uma peça valida.");
}

//EX7
if (percent < 0 || percent > 100) {
console.log("Erro. Insira uma porcentagem valida.")
}

else if (percent >= 90) {
    console.log("A");
}
else if (percent >= 80) {
    console.log("B");
}
else if (percent >= 70) {
    console.log("C");
}
else if (percent >= 60) {
    console.log("D");
}
else if (percent >= 50) {
    console.log("E");
}
else if (percent < 50) {
    console.log("F");
}

//EX8

if ((a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0)) {
    console.log(v);
    //correto seria usar return no lugar de console.log, mas ainda vou continuar com mais exercícios
}
else {
    console.log(f);
    //correto seria usar return no lugar de console.log, mas ainda vou continuar com mais exercícios
}

//EX9

if ((a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0)) {
    console.log(v);
    //correto seria usar return no lugar de console.log, mas ainda vou continuar com mais exercícios
}
else {
    console.log(f);
    //correto seria usar return no lugar de console.log, mas ainda vou continuar com mais exercícios
}

//EX10

if (venda < 0 || custo < 0) {
    console.log("Erro. insira valores validos");
}
else {
    lucro = 1000 * (venda - (custo * 1.20));
    console.log(lucro);
}

//EX11

//INSS

if (bruto < 0) {
    console.log("coloque um valor valido");
    //Quando aprender, pedir para inserir um novo valor e repetir o processo
}
else if (bruto < 1556.95) {
    brutoInss = bruto - (bruto * 0.08);
}
else if (bruto < 2594.93)
{
    brutoInss = bruto - (bruto * 0.09);
}
else if (bruto < 5189.83)
{
    brutoInss = bruto - (bruto * 0.11);
}
else {
    brutoInss = bruto - 570.88;
}

// IR

if (brutoInss > 1903.98 && brutoInss < 2826.66) {
    liquido = brutoInss - ((brutoInss * 0.075) - 142.8);
}
else if (brutoInss >= 2826.66 && brutoInss < 3751.06) {
    liquido = brutoInss - ((brutoInss * 0.15) - 354.8);
    }
else if (brutoInss >= 3751.06 && brutoInss <= 4664.68) {
    liquido = brutoInss - ((brutoInss * 0.225) - 636.13);
    }
else if (brutoInss >= 3751.06 && brutoInss <= 4664.68) {
    liquido = brutoInss - ((brutoInss * 0.225) - 636.13);
    }
else if (brutoInss > 4664.68) {
    liquido = brutoInss - ((brutoInss * 0.275) - 869.36);
    }

    console.log(liquido);