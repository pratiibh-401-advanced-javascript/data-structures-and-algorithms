'use strict';

let HashMap = require('../hashtable.js');

describe('Testing the hashtable', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    let newHash = new HashMap();
    newHash.add('Master Chief', 'John-117');
    expect(newHash.get('Master Chief')).toBe('John-117');
  });

  it('Retrieving based on a key returns the value stored ', () => {
    let newHash = new HashMap();
    newHash.add('Lord', 'John');
    expect(newHash.get('Lord')).toBe('John');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let newHash = new HashMap();
    expect(newHash.get('N/A')).toBe(undefined);
  });

  it('Successfully handle a collission within the hashtable', () => {
    let newHash = new HashMap();
    newHash.add('Johnny', 'Appleseed');
    newHash.add('Johnny', 'Orangeseed');
    expect(newHash.get('Johnny')).toBe('Appleseed');
  });

  it('Successfully retrieves a value from a bucket within the hashtable that has a collision (returns first one)', () => {
    let newHash = new HashMap();
    newHash.add('Johnny', 'Orangeseed');
    newHash.add('Johnny', 'Appleseed');
    newHash.add('Johnny', 'Bananaseed');

    expect(newHash.get('Johnny')).toBe('Orangeseed');
  });

  it('Successfully hash a key to an in-range value', () => {
    let newHash = new HashMap();
    let hash = newHash.hash('Master Chief', 'John-117');
    expect(hash).toBeDefined();
  });

});

