'use strict';


function findRepeatedWord(str){

    let maxCount = 0;
    let frequentWord;
    let counts = {};

    let res = str.split(' ');

    for(let i = 0; i < res.length; i++){
        let wordAtIndex = res[i];
        counts[wordAtIndex] = 0;
        
        for(let j = 0; j < res.length; j++){
            let comparison = res[j];
            if(wordAtIndex === comparison){
                counts[wordAtIndex]++;
                if((maxCount < counts[wordAtIndex]) && (counts[wordAtIndex] > 1)){
                    maxCount = counts[wordAtIndex];
                    frequentWord = wordAtIndex;
                }
                // console.log('Word: ' + wordAtIndex + ', Count: ' + counts[wordAtIndex])
            } 
        }

    }

        return frequentWord + ' is repeated ' + maxCount + ' times!';
};

console.log(findRepeatedWord('dog hah cat hah hi cat man heyy idiot idiot cat idiot idiot cat cat cat cat cat cat '));

module.exports = findRepeatedWord;
