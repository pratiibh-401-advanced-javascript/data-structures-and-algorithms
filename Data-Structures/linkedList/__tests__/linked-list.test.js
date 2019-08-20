'use strict';

const linkedList = require('../linked-list.js');

const TestLinkedList = linkedList.LinkedList;

describe('Testing Linked list', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let newList = new TestLinkedList();
    expect(newList.head).toBeFalsy();
  });

  it('Can properly insert into the linked list', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.next.data).toEqual(2);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.data).toEqual(3);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.data).toEqual(3);
    expect(newList.head.next.data).toEqual(2);
    expect(newList.head.next.next.data).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(2)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(14000)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new TestLinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.toString()).toEqual('321');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    let newList = new TestLinkedList();
    newList.append(1);
    expect(newList.head.data).toEqual(1);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new TestLinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    expect(newList.head.data).toEqual(1);
    expect(newList.head.next.data).toEqual(2);
    expect(newList.head.next.next.data).toEqual(3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let newList = new TestLinkedList();
    newList.append(1);
    newList.append(3);
    newList.insertBefore(3, 2);
    expect(newList.head.data).toEqual(1);
    expect(newList.head.next.data).toEqual(2);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new TestLinkedList();
    newList.append(2);
    newList.insertBefore(2, 1);
    expect('This is an edgecase');
    expect(newList.head.next.data).toEqual(2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new TestLinkedList();
    newList.append(1);
    newList.append(3);
    newList.insertAfter(1, 2);
    expect(newList.head.data).toEqual(1);
    expect(newList.head.next.data).toEqual(2);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new TestLinkedList();
    newList.append(1);
    newList.append(2);
    newList.insertAfter(2, 3);
    expect(newList.head.data).toEqual(1);
    expect(newList.head.next.data).toEqual(2);
  });
});

