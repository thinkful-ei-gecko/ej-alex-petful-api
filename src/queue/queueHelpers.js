  
/* eslint-disable no-console */
const queueHelpers = {

  peek(queue) {
    if (queue.first) {
      return queue.first.data;
    }
    return null;
  },

  isEmpty(queue) {
    return !queue.first;
  },

  display(queue) {
    let currNode = queue.first;
    let currPos = 1;
    while (currNode) {
      console.log(`current position: ${currPos}`);
      console.log(`data: ${currNode.data}`);
      if (currNode.next !== null) {
        console.log(`next: ${currNode.next.data}`);
      } else {
        console.log(`next: ${null}`);
      }
      currPos += 1;
      currNode = currNode.next;
    }
  },

};

module.exports = queueHelpers;