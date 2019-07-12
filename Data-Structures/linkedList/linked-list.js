
//this is my code for thursday, will build and update surrounding code soon


  kFromTheEnd(k) {
    let counter = 0;
    let current = this.head;
    let secondCounter = 0;
    while (current.next) {
      console.log("current value is " + current.value)
      console.log("next value is " + current.next.value)
      current = current.next;
      counter++;
      console.log("counter increased to " + counter);
      console.log("current value is now " + current.value);
    }
    let target = counter - k;
      console.log("counter is " + counter)
      console.log("k is " + k)
      console.log("target is " + target)
      console.log("current value is " + current.value)
    current = this.head;
    console.log('ANYTHING AFTER THIS IS SECOND WHILE LOOP')
    while (current.next) {
      console.log("value is " + current.value) 
      current = current.next
      secondCounter++;
      console.log("target is " + target) 
      if (target === secondCounter) {
        console.log("the current value is " + current.value)
        return current.value;
      }
    }
    current = current.next;
  }

}