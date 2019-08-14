'use strict';

const BinaryTree = require('../tree.js');

describe('Binary Tree Tests', () => {
  it('can instantiate a tree', () => {
    let tree = new BinaryTree();
    expect(tree instanceof BinaryTree).toBeTruthy();

  });
})
;
