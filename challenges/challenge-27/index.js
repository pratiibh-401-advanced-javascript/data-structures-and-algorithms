'use strict';

function mergeSort (arr) {
  // No need to sort the array if the array only has one element or empty
  if (arr.length <= 1) {
    return arr;
  };
  // In order to divide the array in half, we need to figure out the middle
  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
};

// Merge the two arrays: left and right
function merge (left, right) {
  let result = [];
  let leftIndex = 0
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; 
    } else {
      result.push(right[rightIndex]);
      rightIndex++; 
    }
  };
  return result;
};

module.exports = mergeSort;




