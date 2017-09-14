var startsWith = require('../src/startsWith');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when a string starts with the provided value', function() {
    eq(startsWith('a', 'abc'), true);
  });

  it('should return true when a long string starts with the provided value', function() {
    eq(startsWith('astro', 'astrology'), true);
  });

  it('should return false when a string does not start with the provided value', function() {
    eq(startsWith('b', 'abc'), false);
  });

  it('should return false when a long string does not start with the provided value', function() {
    eq(startsWith('stro', 'astrology'), false);
  });

  it('should return true when an array starts with the provided value', function() {
    eq(startsWith(['a'], ['a', 'b', 'c']), true);
  });

  it('should return true when an array starts with the provided values', function() {
    eq(startsWith(['a', 'b'], ['a', 'b', 'c']), true);
  });

  it('should return false when an array does not start with the provided value', function() {
    eq(startsWith(['b'], ['a', 'b', 'c']), false);
  });

  it('should return false when an array does not start with the provided values', function() {
    eq(startsWith(['b', 'c'], ['a', 'b', 'c']), false);
  });
});
