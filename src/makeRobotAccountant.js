'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function innerSum(a, b) {
    return a + b;
  }

  return function getSum(a) {
    callCount++;

    if (callCount <= 3 || callCount % 2 !== 0) {
      // First three calls and odd calls work fine
      return function(b) {
        return innerSum(a, b);
      };
    } else {
      // Even calls return error message
      return function(b) {
        return 'Bzzz... Error!';
      };
    }
  };
}

module.exports = makeRobotAccountant;
