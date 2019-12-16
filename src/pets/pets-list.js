const Queue = require('../queue/Queue');
const catsQueue = require('../cat/cats-queue');
const dogsQueue = require('../dog/dogs-queue');
const queueHelpers = require('../queue/queueHelpers');

// function makePetsQueue(catsQueue, dogsQueue) {
//   catsQueue.populateQueue();
//   dogsQueue.populateQueue();

//   let petsQueue = new Queue;

//   let cats = catsQueue.queue;
//   let dogs = dogsQueue.queue;

//   while (!queueHelpers.isEmpty(cats) || !queueHelpers.isEmpty(dogs)) {
//     if (!queueHelpers.isEmpty(cats)) {
//       petsQueue.enqueue(cats.dequeue());
//     }
//     if (!queueHelpers.isEmpty(dogs)) {
//       petsQueue.enqueue(dogs.dequeue());
//     }
//   }

//   let petsArr = queueHelpers.arrayFromQueue(petsQueue);

//   return petsArr;
// }

// const petsList = makePetsQueue(catsQueue, dogsQueue);

// module.exports = petsList;