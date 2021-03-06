class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {

    const node = new _Node(data);

    if (this.first === null && this.last === null) {
      this.first = node;
    }

    if (this.last !== null) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {

    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;