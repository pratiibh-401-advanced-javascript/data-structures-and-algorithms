'use strict';

function insertionSort(numbers) {
  for(let i = 0; i < numbers.length; i++){
    let j = i -1;
    let temp = numbers[i];
    while(j >= 0 && temp < numbers[j]){
      numbers[j+1] = numbers[j];
      j = j-1;
    }
    numbers[j+1] = temp;
  }
  return numbers;
}

module.exports = insertionSort;




