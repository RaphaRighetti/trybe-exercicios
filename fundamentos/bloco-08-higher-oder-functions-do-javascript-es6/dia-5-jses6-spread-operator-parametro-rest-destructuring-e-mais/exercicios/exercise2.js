// escreva sum abaixo

const sum = (...num) => num.reduce((acc, curr) => acc + curr);

const numbers = [2, 4, 7, 11, 19, 21, 32];

console.log(sum(...numbers));
console.log(sum(2, 4, 7, 11, 19, 21, 32));
console.log(sum(4, 5, 6));
