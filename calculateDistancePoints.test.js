const assert = require('assert');
const distancePoints = require('./calculateDistancePoints');

describe('distancePoints', () => {
  it ('should work with distance above kPoint on big hill', () => {
    const actual = distancePoints(134, 'big', 120);
    const expected = 85.2;

    assert.equal(actual, expected);
  })

  it ('should work with distance equal to kPoint on normal hill', () => {
    const actual = distancePoints(98, 'normal', 98);
    const expected = 60;

    assert.equal(actual, expected);
  })

  it ('should work with distance below kPoint on huge hill', () => {
    const actual = distancePoints(168, 'huge', 200);
    const expected = 85.2;
  })

  it ('should work with meters with decimals', () => {
    const actual = distancePoints(119.5, 'big', 120);
    const expected = 59.1;

    assert.equal(actual, expected);
  })
  
})