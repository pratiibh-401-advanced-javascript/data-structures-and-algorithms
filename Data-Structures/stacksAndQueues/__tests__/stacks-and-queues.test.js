'use strict';

const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

describe('Stack tests', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop(3);
    expect(stack.top.next.next).toBeNull();
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop(3);
    stack.pop(2);
    stack.pop(1);
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack;
    expect(stack.top).toBeNull();
  });


});

describe('Queue tests', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toEqual(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.peek()).toBeNull();
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.peek().value).toEqual(1);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue;
    expect(queue.front).toBeNull();
  });

});

