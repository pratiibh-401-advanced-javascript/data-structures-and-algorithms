'use strict';

const quickSort = require('../index.js');


describe('Testing Merge Sort', () => {
  it('Can sort an array', () => {
    let testArray = [5, 4, 6, 2, 3, 1];
    expect(quickSort(testArray)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('An empty array will not take away functionality', () => {
    let testArray = [];
    expect(quickSort(testArray)).toEqual([]);
  });

  it('Negative values inside the array will not take away functionality', () => {
    let testArray = [-60, -100, 40, 0, 100];
    expect(quickSort(testArray)).toEqual([-100, -60, 0, 40, 100]);
  });

});





