const Queue = require('../queue/Queue');
const catsQueue = require('../cat/cats-queue');
const dogsQueue = require('../dog/dogs-queue');
const queueHelpers = require('../queue/queueHelpers');

function makePetsQueue(catsQueue, dogsQueue) {
  catsQueue.populateQueue();
  dogsQueue.populateQueue();
  console.log(catsQueue);
  console.log(dogsQueue);

  let petsQueue = new Queue;

  while (!catsQueue.isEmpty() || !dogsQueue.isEmpty()) {
    while (!catsQueue.isEmpty()) {
      petsQueue.enqueue(catsQueue.dequeue());
    }
    while (!dogsQueue.isEmpty()) {
      petsQueue.enqueue(dogsQueue.dequeue());
    }
  }

  return petsQueue;
}

const petsList = makePetsQueue(catsQueue, dogsQueue);
console.log(petsList);

module.exports = petsList;