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

  mergeLists(listA, listB) {
    if(typeof listA !== 'object' || typeof listB !== 'object') {
      return 'invalid argument';
    }
    let currenta = listA.head;
    let currentb = listB.head;

    while(currenta.next && currentb.next) {
      currentb.head = currenta.next;
      currenta.next = currentb;
      currenta = currentb.next;
      currentb = currentb.head;

    }
    return currenta.head;
  }

}


let list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);

let list2 = new LinkedList();
list2.append(4);
list2.append(5);
list2.append(6);

mergeLists(list1, list2);
console.log('list 1', list1);


module.exports = {LinkedList};

