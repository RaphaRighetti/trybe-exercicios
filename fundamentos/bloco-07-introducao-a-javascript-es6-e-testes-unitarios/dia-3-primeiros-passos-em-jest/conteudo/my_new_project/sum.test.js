const sum = (a, b) => a + b;

describe('teste soma requisito 1', () => {
  test('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});