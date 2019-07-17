function mergeLists(listA, listB) {
  if(typeof listA !== 'object' || typeof listB !== 'object') {
    return 'invalid argument';
  }
  let currenta = listA.head;
  let currentb = listB.head;

  while(currenta.next && currentb.next) {
    currentb.head = currenta.next;
    currenta.next = currentb;
    currenta = currentb.next;
    currentb = currentb.head;

  }
  return currenta.head;
}



let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

let list2 = new LinkedList();
list2.append(4);
list2.append(5);
list2.append(6);

mergeLists(list, list2);
console.log('list 1', list);

// code for project will update soon
