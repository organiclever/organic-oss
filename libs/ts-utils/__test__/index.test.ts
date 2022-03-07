import * as utils from '../src';

describe('All utils are exported', () => {
  test('sum utils are exported', () => {
    expect(utils).toHaveProperty('sum');
  });
});
