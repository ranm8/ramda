var juxt = require('../src/juxt');
const multiply = require('../src/multiply');
const add = require('../src/add');
const nAry = require('../src/nAry');
const T = require('../src/T');
var eq = require('./shared/eq');

describe('juxt', function() {
  function hello() { return 'hello'; }
  function bye() { return 'bye'; }

  it('works with no functions and no values', function() {
    eq(juxt([])(), []);
  });

  it('works with no functions and some values', function() {
    eq(juxt([])(2, 3), []);
  });

  it('works with 1 function and no values', function() {
    eq(juxt([hello])(), ['hello']);
  });

  it('works with 1 function and 1 value', function() {
    eq(juxt([add(3)])(2), [5]);
  });

  it('works with 1 function and some values', function() {
    eq(juxt([multiply])(2, 3), [6]);
  });

  it('works with some functions and no values', function() {
    eq(juxt([hello, bye])(), ['hello', 'bye']);
  });

  it('works with some functions and 1 value', function() {
    eq(juxt([multiply(2), add(3)])(2), [4, 5]);
  });

  it('works with some functions and some values', function() {
    eq(juxt([add, multiply])(2, 3), [5, 6]);
  });

  it('retains the highest arity', function() {
    var f = juxt([nAry(1, T), nAry(3, T), nAry(2, T)]);
    eq(f.length, 3);
  });

  it('returns a curried function', function() {
    eq(juxt([multiply, add])(2)(3), [6, 5]);
  });

});
