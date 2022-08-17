const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script.js');

//ex1
describe('(1) - tests function sum', () => {
  test('- tests sum(4,5) = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('- tests sum(0,0) = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('- tests error, if dosent get two numbers', () => {
    expect( () => {sum(4, '5')}).toThrow();
  });

  test('- tests the error message', () => {
    expect( () => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});

//ex2
describe('(2) - tests function myRemove', () => {
  it('- tests remove 3 from array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('- tests if not remove 3 from array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('- tests if try to remore 5 from array [1, 2, 3, 4], expect to remove nothing', () => {
    expect(myRemove([1, 2, 3, 4], )).toEqual([1, 2, 3, 4]);
  });
});

//ex3
describe('(3) - tests function fizzbuzz', () => {
  it('- tests 15 return fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('- tests 9 return fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('- tests 10 return buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('- tests 7 return 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('- tests if param is not a number, return error', () => {
    expect(myFizzBuzz('7')).toBe(false);
  });
});

//ex4
describe('(4) - tests functions encode, decode', () => {
  it('- tests encode is a function', () => {
    expect(typeof(encode)).toBe('function');
  });

  it('- tests decode is a function', () => {
    expect(typeof(decode)).toBe('function');
  });

  it('- tests encode a, e, i, o, u return 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('- tests decode 1, 2, 3, 4, 5 return a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('- tests encode keeps other letters', () => {
    expect(encode('pqrxyz')).toBe('pqrxyz');
  });

  it('- tests decode keeps other letters', () => {
    expect(decode('pqrxyz')).toBe('pqrxyz');
  });

  it('- tests encode keeps phrase length', () => {
    expect(encode('a, e, i, o, u').length).toBe('a, e, i, o, u'.length);
  });

  it('- tests decode keeps phrase length', () => {
    expect(decode('1, 2, 3, 4, 5').length).toBe('1, 2, 3, 4, 5'.length);
  });
});

//ex5
describe('(5) - Testa a função techList', () => {
  it('- Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('- Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('- Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('- Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//ex6
describe('(6) - Testa a função hydrate', () => {
  it('- Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('- Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('- Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
