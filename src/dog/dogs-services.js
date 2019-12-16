const { dogsQueue } = require('../store');

const dogsServices = {
  getAllDogs() {
    return dogsQueue;
  },

  getOneDog() {
    if (dogsQueue.first === null) {
      return null;
    }
    return dogsQueue.first.value;
  },

  getNextDog(dogName) {
    let node = dogsQueue.first;
    while(dogName !== node.value.name) {
      node = node.next;
    }
    if(node.next !== null) {
      return node.next.value;
    } else {
      throw new Error('There are no dogs left to adopt.');
    }
  },

  deleteDog() {
    return dogsQueue.dequeue();
  }
};

module.exports = dogsServices;