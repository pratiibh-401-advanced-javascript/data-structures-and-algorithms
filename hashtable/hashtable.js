class HashMap {
    constructor(size) {
      this.size = size;
      this.bucket = new Array(size);
    }

    hash(key) {
      return key.split('').reduce( (acc,val) => {
        return acc + val.charCodeAt(0)
      }, 0) * 599 % this.size;
    }

    add(key,value) {
      let hashValue = this.hash(key);
      if( !this.bucket[hashValue]) { this.bucket[hashValue] = []; }
      this.bucket[hashValue].push({[key]:value});
    }

    contains(key) {
      let hashKey = this.hash(key);
      if(this.bucket[hashKey]) {
        for(let i=0; i<this.bucket[hashKey].length; i++) {
          if(this.bucket[hashKey][i][key]) { return true;}
        }
        return false;
      }
      else return false;
    }

    get(key) {
      let hashKey = this.hash(key);
      let bucketKey = this.bucket[hashKey]
      if(bucketKey) {
        for(let i = 0; i < bucketKey.length; i++) {
          if(bucketKey[i].hasOwnProperty(key)) {
            return bucketKey[i][key]
          }
        }
      }
    }

  }

  module.exports = HashMap;