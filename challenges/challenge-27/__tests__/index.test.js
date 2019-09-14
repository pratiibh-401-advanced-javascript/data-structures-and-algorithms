'use strict';

const mergeSort = require('../index.js');


describe('Testing Merge Sort', () => {
  it('Can sort an array', () => {
    let testArray = [5, 4, 6, 2, 3, 1];
    expect(mergeSort(testArray)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('An empty array will not take away functionality', () => {
    let testArray = [];
    expect(mergeSort(testArray)).toEqual([]);
  });

  it('Negative values inside the array will not take away functionality', () => {
    let testArray = [-60, -100, 40, 0, 100];
    expect(mergeSort(testArray)).toEqual([-100, -60, 0, 40, 100]);
  });

});





