const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('totalPoints', () => {
  it ('should return total points', () => {
    const actual = calculateTotalPoints(227.5, 'huge', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
    const expected = 208.3;

    assert.equal(actual, expected);
  })

  it ('should work with no wind and gate factors', () => {
    const actual = calculateTotalPoints(125.5, 'big', 120, [18.0, 18.0, 18.5, 18.5, 18.0]);
    const expected = 124.4;

    assert.equal(actual, expected);
  })

  
})