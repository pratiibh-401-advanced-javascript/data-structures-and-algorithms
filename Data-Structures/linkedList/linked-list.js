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

  kFromTheEnd(k){
    let counter = 0;
    let current = this.head;
    let secondCounter = 0;
    while (current.next) {
      current = current.next;
      counter++;
    }
    let target = counter - k;
    current = this.head;
    while (current.next) {
      current = current.next;
      secondCounter++;
      if (target === secondCounter) {
        return current.value;
      }
    }
    current = current.next;
  }

}

module.exports = {LinkedList};
