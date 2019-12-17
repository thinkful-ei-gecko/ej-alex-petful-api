const { catsQueue } = require('../STORE');

const catsServices = {
  getAllCats() {
    return catsQueue;
  },

  getOneCat() {
    return catsQueue.first.value;
  },

  getNextCat(catName) {
    let node = catsQueue.first;
    while(catName !== node.value.name) {
      node = node.next;
    }
    if(node.next !== null) {
      return node.next.value;
    } else {
      throw new Error('There are no cats left to adopt.');
    }   
  },

  deleteCat() {
    return catsQueue.dequeue();
  }
};

module.exports = catsServices;