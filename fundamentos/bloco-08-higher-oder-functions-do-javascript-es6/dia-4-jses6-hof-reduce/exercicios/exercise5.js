const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    for (let i = 0; i < curr.length; i += 1) {
      if (curr[i].toLowerCase() === 'a') {
        acc += 1;
      }
    }
    return acc;
  }, 0);
}

console.log(containsA());
console.log(containsA() === expectedResult);
