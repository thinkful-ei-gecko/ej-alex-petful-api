const Queue = require('../');
const queueHelp = require('../queue/queueHelpers');

const catsQueue = {
  catsArr: [
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Wellesley',
      gender: 'M',
      age: 3,
      breed: 'Bengal',
      story: 'Fell off the back of a truck.',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Jenna',
      gender: 'F',
      age: 5,
      breed: 'Russian Blue',
      story: 'Just a cat',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Marco',
      gender: 'M',
      age: 13,
      breed: 'Moppet',
      story: 'Just a cat',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'UniqueCatName',
      gender: 'F',
      age: 3,
      breed: 'Siamese',
      story: 'Just a cat',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Jarvis',
      gender: 'M',
      age: 1,
      breed: 'Maine Coone',
      story: 'Just a cat',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Banana',
      gender: 'F',
      age: 4,
      breed: 'Tuxedo',
      story: 'Just a cat',
    },
    {
      imageURL: 'http://placekitten.com/300/300',
      imageDescription: 'A beautiful sad cat',
      name: 'Beef',
      gender: 'M',
      age: 8,
      breed: 'Tabby',
      story: 'Just a cat',
    },
  ],

  catsQueue: new Queue(),

  populateQueue() {
    this.catsArr.forEach((cat) => this.catsQueue.enqueue(cat));
    return this.catsQueue;
  },

  viewTopCat() {
    return queueHelp.peek(this.catsQueue);
  },

  catAdopted() {
    const cat = this.catsQueue.dequeue();
    this.catsQueue.enqueue(cat);
    return cat;
  },
};

module.exports = catsQueue;