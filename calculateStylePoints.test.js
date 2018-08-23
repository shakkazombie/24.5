const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it ('should return total points', () => {
    const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);
    const expected = 55;

    assert.equal(actual, expected);
  })

  it ('should work with same notes', () => {
    const actual = calculateStylePoints([15.0, 15.0, 15.0, 15.0, 15.0]);
    const expected = 45;

    assert.equal(actual, expected);
  })

  it('should work when note is higher than 20 points', () => {
    const actual = calculateStylePoints([23.0, 21.0, 15.0, 15.0, 14.0]);

    const expected = 50;

    assert.equal(actual, expected);
  })
})