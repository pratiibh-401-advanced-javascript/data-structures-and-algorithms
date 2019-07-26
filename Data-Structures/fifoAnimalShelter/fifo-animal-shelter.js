'use strict';

let Queue = require('../queue.js');

class AnimalShelter {
  constructor() {
    this.doges = new Queue();
    this.cates = new Queue();
  }

  enQueue(animal) {
    if (animal.species === 'doge') {
      this.doges.enqueue(animal);
    }
    if (animal.species === 'cate') {
      this.cates.enqueue(animal);
    }
  }

  deQueue(pref) {
    if (pref !== 'doge' || pref !== 'cate') {
      return null;
    }
    if (!this.pref.front) {
      return `🤨 no ${pref} available`;
    } else {
      return pref.dequeue;
    }
  }
}

module.exports = AnimalShelter;
