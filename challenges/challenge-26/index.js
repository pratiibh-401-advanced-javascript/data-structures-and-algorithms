'use strict';

function insertionSort(numbers) {
  for(let i = 0; i < numbers.length; i++){
    let j = i -1;
    let temp = numbers[i]; // selects the first unsorted element
    while(j >= 0 && temp < numbers[j]){
      // this loop shifts all elements to the right in order to create position for unsorted element
      numbers[j+1] = numbers[j];
      j = j-1;
    }
    numbers[j+1] = temp; // this inserts the unsorted element into correct position
  }
  return numbers;
}

module.exports = insertionSort;




