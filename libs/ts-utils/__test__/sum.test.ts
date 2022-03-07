import { sum } from '../src';

describe('Test sum functionality', () => {
  test('Test sum output for positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Test sum output for negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
