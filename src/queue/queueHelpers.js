
/* eslint-disable no-console */
const queueHelpers = {

  isEmpty(queue) {
    return !queue.first;
  },

  peek(queue) {
    return queue.first;
  },

  display(queue) {
    let curr = this.peek(queue);
    while (!!curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  },

  populateQueue(queue, arr) {
    arr.forEach((pet) => queue.enqueue(pet));
    return queue;
  },

  arrayFromQueue(queue) {
    let newArray = [];
    while (!this.isEmpty(queue)) {
      newArray = [ ...newArray, queue.dequeue()];
    }
    return newArray;
  }

};

module.exports = queueHelpers;