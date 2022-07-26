// Objetos

let player  = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

console.log("A jogadora", player['name'], player['lastName'], "tem", player['age'], "anos de idade.");

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora", player['name'], player['lastName'], "foi eleita a melhor do mundo por", player['bestInTheWorld'].length, "vezes.");

console.log("A jogadora possui", player['medals']['golden'], "medalhas de ouro e", player['medals']['silver'], "medalhas de prata.");

// For/in e for/of

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log('Olá', names[key]);
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key, car[key]);
  }

  // Funções

//EX1

// soma

function soma(a, b) {
return a + b;
}
console.log(soma(2, 3));


// subtração

function subtracao(a, b) {
return  a - b;
}
console.log(subtracao(7, 5));

// multiplicação
function multiplicacao(a, b) {
return a * b;
}
console.log(multiplicacao(7, 3));

// divisão

function divisao(a, b) {
return a / b;
}
console.log(divisao(9, 3));

// módulo

function modulo(a, b) {
return a % b;
}
console.log(modulo(4, 2));

//EX2
function maiorNumero(a, b) {
if (a > b) {
    return a;
}
else if (b > a) {
    return b
}
else if (a === b) {
return "os números são iguais";
}
}

console.log(maiorNumero(7, 4));

//EX3

function maioresNumeros(a, b, c) {
if (a >= b && a >= c) {
    if (a > b && a > c) {
      return a;  
    }
    else if ((a === b && a > c) || (a > b && a === c) || (a === b && a === c)) {
    return "os maiores valores são iguais " + a;
    }
}

else if (b >= a && b >= c) {
    if (b > a && b > c) {
      return b;  
    }
    else if ((b === a && b > c) || (b > a && b === c) || (a === b && b === c)) {
        return "os maiores valores são iguais " + b;
    }
}

else if (c >= b && c >= a) {
    if (c > b && c > a) {
      return c;  
    }
    else if ((c === b && c > a) || (c > b && a === c) || (c === b && a === c)) {
    return "os maiores valores são iguais " + c;
    }
}
}

console.log(maioresNumeros(71, 35, 23));

//EX4
function ehPositivo(a) {

if (a > 0) {
    return "positive";
}
else if (a < 0) {
    return "negative";
}
else {
    return "zero";
}
}

console.log(ehPositivo(7));

//EX5

function angulosInternos(a, b, c) {

if ((a <= 0 && a >= 180) || (b <= 0 && b >= 180) || (c <= 0 && c >= 180)) {
    return "Erro. Retorne ângulos validos.";
}
else if (a + b + c === 180) {
return "São ângulos internos de um triângulo.";
}
else {
    return "Não são ângulos internos de um triângulo."
}
}

console.log(angulosInternos(90, 53, 37));
