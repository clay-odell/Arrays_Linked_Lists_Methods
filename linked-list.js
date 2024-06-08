/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("Can't pop from an empty list.");
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }
  pop() {
    if (!this.head) {
      throw new Error("Can't pop from an empty list.");
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty!");
    }
    let oldHead = this.head;

    this.head = oldHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of bounds.");
    }
    let current = this.head;
    let count = 0;

    while (count != idx) {
      current = current.next;
      count++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of bounds!");
    }
    let current = this.head;
    let count = 0;
    while (count != idx) {
      current = current.next;
      count++;
    }
    current.val = val;
    return this;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is invalid!");
    }
    let newNode= new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let prev = this.head;
      let count = 0;
      while (count < idx -1){
        prev = prev.next;
        count++;
      }
      newNode.next = prev.next;
      prev.next = newNode;
       
    }
    this.length++;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid!");
    }

    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let current = this.head;
    let count = 0;
    while (count !== idx - 1) {
      current = current.next;
      count++;
    }
    let removed = current.next;
    current.next = removed.next;
    this.length--;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
