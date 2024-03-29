'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  // insert(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   var current = this.root;
  //   while(true){
  //     if(value === current.value){
  //       return undefined;
  //     }
  //     if(value < current.value){
  //       if(current.left === null){
  //         current.left = newNode;
  //         return this;
  //       }
  //       current = current.left;
  //     } else {
  //       if(current.right === null){
  //         current.right = newNode;
  //         return this;
  //       }
  //       current = current.right;
  //     }
  //     if(value === current.value) return undefined;
  //     if(value > current.value){
  //       if(current.right === null){
  //         current.right = newNode;
  //         return this;
  //       }
  //       current = current.right;
  //     } else {
  //       if(current.left === null){
  //         current.left = newNode;
  //         return this;
  //       }
  //       current = current.left;
  //     }
  //   }
  //   // create node with value
  //   // traverse the tree
  //   // if value > node.value ... go right, else go left
  //   // when I have an opening, put it in there
  // }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }

  breadthFirst() {
    let results = [];
    let nodeQueue= [];

    nodeQueue.push(this.root);

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) { nodeQueue.push(current.left);}
      if(current.right) { nodeQueue.push(current.right);}
    }

    return results;
  }

  findMaximumValue() {
    let maxValue = 0;
    if(!this.root || typeof this.root !== 'number') {
      return null;
    }
    let _walk = (node) =>{
      if( node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }

    };
    _walk(this.root);
    return maxValue;
  }
}


// let tree = new BinaryTree();

// let ten = new Node(10);
// let four = new Node(7);
// let seven = new Node(4);
// let eleven = new Node(9);
// let nine = new Node(11);
// let fifteen = new Node(12);
// let twelve = new Node(15);

// tree.root = ten;

// ten.left = seven;
// ten.right = twelve;
// seven.left = four;
// seven.right = nine;
// twelve.left = eleven;
// twelve.right = fifteen;


// tree.insert(10);
// tree.insert(7);
// tree.insert(4);
// tree.insert(9);
// tree.insert(11);
// tree.insert(15);



// console.log('preOrder', tree.preOrder());
// console.log('inOrder', tree.inOrder());
// console.log('postOrder', tree.postOrder());
// console.log('breadthFirst', tree.breadthFirst());
// console.log('findMaximumValue', tree.findMaximumValue());


module.exports = BinaryTree;
