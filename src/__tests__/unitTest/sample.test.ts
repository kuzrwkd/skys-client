const sum = (a: number, b: number) => a + b;

it('sample testing', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
