// ex1
const factorial = n => {
  if (n >= 0 && Number.isInteger(n)) {
    const aFatorar = n;
    n === 0 ? n = 1 : n = n;
    for (let i = n - 1; i > 1; i -= 1) {
      n *= i;
    }
    return `O fatorial de ${aFatorar} é ${n}`;
  }
  return ('Errorrrr');
}

console.log(factorial(5));

//ex2
const longestWord = frase => {
  const arrayFrase = frase.split(' ');
  let bigWord = arrayFrase[0];
  for (let value of arrayFrase) {
    if (value.length > bigWord.length) {
      bigWord = value;
    }
  }
  return bigWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//ex2 bonus

const longestWordTwo = frase => {
  let newFrase = frase.split(' ');
  newFrase.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    }
    if (a.length < b.length) {
      return 1;
    }
    return 0;
  })
  return newFrase[0];
}

console.log(longestWordTwo('Antônio foi no banheiro e não sabemos o que aconteceu'));

//ex3
const botao = document.getElementById('botao');
const counterHtml = document.getElementById('clickCounter');
window.onload = () => {
  let counter = 0;
  botao.addEventListener('click', () => {
    counter += 1;
    counterHtml.innerHTML = counter;
  });
}

//ex4

const substituiX = (frase, x) => {
  let arrayFrase = frase.split('x');
  newFrase = `${arrayFrase[0]}`;
  for (let i = 1; i < arrayFrase.length; i += 1) {
    newFrase += `${x}${arrayFrase[i]}`;
  }
  return newFrase;
}

console.log(substituiX('Tryber x aqui! Bem-vindo x', 'Rapha'));

const minhasSkills = skills => {
  let frase = `${substituiX('Tryber x aqui! Bem-vindo x', 'Rapha')}
Minhas três principais habilidades são:
`;
  for (let value of skills) {
    frase += `${value}\n`;
  }
  return frase;
}

console.log(minhasSkills(['html', 'css', 'javascript']));
