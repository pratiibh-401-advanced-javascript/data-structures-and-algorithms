'use strict';

const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

describe('Stack tests', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  })
});

describe('Queue tests', () => {
  it('Can successfully push onto a stack', () => {
    let queue = new Queue;
    queue.enqueue(1);
  })
});



// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
