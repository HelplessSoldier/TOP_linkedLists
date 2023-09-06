class Node {
  constructor(value = null, next = null, parent = null) {
    this.value = value;
    this.next = next;
    this.parent = parent;
  }
}

class LinkedList {
  constructor(headValue, next) {
    this.head = new Node(headValue, next);
    this.tail = this.head;
  }
  append(value) {
    const nodeToAdd = new Node(value);
    this.tail.next = nodeToAdd;
    nodeToAdd.parent = this.tail;
    this.tail = nodeToAdd;
  }
  prepend(value) {
    const nodeToAdd = new Node(value);
    nodeToAdd.next = this.head;
    this.head.parent = nodeToAdd;
    this.head = nodeToAdd;
  }
  size() {
    let currentNode = this.head;
    let count = 1;
    while (currentNode.next != null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  at(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode != null) {
      if (currentIndex === index) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    throw new Error("Index out of bounds");
  }
  pop() {
    let lastNode = this.tail;
    this.tail = this.tail.parent;
    return lastNode;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let i = -1;
    while (currentNode != null) {
      i++;
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    let currentNode = this.head;
    let res = `(${currentNode.value})`;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      res = res + ` -> (${currentNode.value})`;
    }
    return res;
  }
  insertAt(value, index) {
    let currentNode = this.head;
    const nodeToAdd = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    nodeToAdd.next = currentNode.next;
    nodeToAdd.parent = currentNode;
    currentNode.next.parent = nodeToAdd;
    currentNode.next = nodeToAdd;
  }
  removeAt(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.parent.next = currentNode.next;
  }
}

module.exports = { Node, LinkedList };
