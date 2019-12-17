const Queue = require('./Queue')

/* eslint-disable no-console */
const queueHelpers = {

  peek(queue) {
    return queue.first;
  },

  display(queue) {
    let curr = this.peek(queue);
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  },

  copyQueue(queue) {
    let newQueue = new Queue();
    
    console.log(queue);
    console.log('queue first: ', queue.first);
    
    let curr = queue.first;

    while (curr !== null) {
      console.log('Curr:', curr);
      newQueue.enqueue(curr.value);
      console.log('newQueue after enqueue: ', newQueue);
      curr = curr.next;
    }

    return newQueue;
  },

  mergeQueues(a, b) {
    let newQueue = new Queue();
    while (!a.isEmpty() || !b.isEmpty()) {
      if (!a.isEmpty())
        newQueue.enqueue(a.dequeue());
      if (!b.isEmpty())
        newQueue.enqueue(b.dequeue());
    }
    return newQueue;
  },

  arrayFromQueue(queue) {
    let newArray = [];
    let curr = queue.first;

    while (curr !== null) {
      newArray.push(curr.value);
      curr = curr.next;
    }
    return newArray;
  }

};

module.exports = queueHelpers;