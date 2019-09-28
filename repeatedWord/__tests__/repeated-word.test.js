'use strict';

const repeatedWord = require('../repeated-word.js');

describe('Testing RepeatedWord', () => {
    it('Can successfully return the most frequently occuring word in a string', () => {
      let testString = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.';
      expect(repeatedWord(testString)).toBe('was is repeated 6 times!');
    });
  
    it('Can successfully break ', () => {
      let testString = 'one two punch';
      expect(repeatedWord(testString)).toBe('undefined is repeated 0 times!');
    });
  
    it('Can successfully return the first of a pair of repeated words ', () => {
      let testString = 'two two one one foxtrot';
      expect(repeatedWord(testString)).toEqual('two is repeated 2 times!');
    });
});