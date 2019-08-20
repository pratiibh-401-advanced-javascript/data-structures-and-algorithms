'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(data){
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  includes(specificValue){
    let curr = this.head;
    while(curr){
      if(curr.data === specificValue){
        return true;
      }
      curr = curr.next;
      // the above line helps run through the data structure
    }
    return false;
  }

  toString(){
    let emptyString = '';
    let curr = this.head;
    while(curr){
      emptyString += curr.data;
      curr = curr.next;
    }
    return emptyString;
  }

  append(data){
    if(!this.head && !this.tail){
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
      //above line iterates through the data structure
    }
  }

  insertBefore(beforeData, newData){
    let curr = this.head;
    let edgecase = 'This is an edgecase';
    if(beforeData === curr.value){
      return edgecase;
    } else {

      while(curr.next.data !== beforeData){
        curr = curr.next;
        // this will iterate through the linked list until the next value in the list is the value we need to insert before in the list
      }
      curr.next = new Node(newData, this.next);
    }
  }

  insertAfter(afterData,newData){
    let curr = this.head;
    while(curr.data !== afterData){
      // very similar to insertBefore, only one piece of logic changes in the condition of the while loop (.next)
      curr = curr.next;
      // this will iterate through the linked list until the next value in the list is the value we need to insert after in the list
    }
    curr.next = new Node(newData, this.next);
  }

}

module.exports = {LinkedList};

//this is my code for thursday, will build and update surrounding code soon


// kFromTheEnd(k){
//   let counter = 0;
//   let current = this.head;
//   let secondCounter = 0;
//   while (current.next) {
//     console.log("current value is " + current.value)
//     console.log("next value is " + current.next.value)
//     current = current.next;
//     counter++;
//     console.log("counter increased to " + counter);
//     console.log("current value is now " + current.value);
//   }
//   let target = counter - k;
//     console.log("counter is " + counter)
//     console.log("k is " + k)
//     console.log("target is " + target)
//     console.log("current value is " + current.value)
//   current = this.head;
//   console.log('ANYTHING AFTER THIS IS SECOND WHILE LOOP')
//   while (current.next) {
//     console.log("value is " + current.value)
//     current = current.next
//     secondCounter++;
//     console.log("target is " + target)
//     if (target === secondCounter) {
//       console.log("the current value is " + current.value)
//       return current.value;
//     }
//   }
//   current = current.next;
// };

