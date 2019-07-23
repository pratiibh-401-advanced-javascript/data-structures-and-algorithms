'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
  }
  peek(){
    if(!this.top){
      return null;
    }
    return this.top.value;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top
    this.top = node;
    return this;
  }
  pop(){
    if(!this.top){
      return null;
    }
    let popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }
}
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.stack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.stack);
console.log(myStack.pop());


class Queue{
  constructor(){
    this.rear = null;
    this.array = [];
  }
  enqueue(value){
    this.array.push(value);
    this.rear = value;
  }
  dequeue(){
    return this.array.shift();
  }
  peek(){
    return this.array[0];
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.array);
console.log(queue.dequeue());

module.exports = {Stack, Queue};
