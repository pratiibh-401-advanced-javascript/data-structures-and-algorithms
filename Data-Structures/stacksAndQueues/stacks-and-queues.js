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
    node.next = this.top;
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



class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value){
    if(this.front === null){
      this.front = new Node(value, this.rear);
    } else {
      let temp = this.front;
      this.front = new Node(value, temp);
    }
    this.length++;
  }
  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    this.length--;
    return temp;
  }
  peek(){
    return this.front;
  }
}



module.exports = {Stack, Queue};
