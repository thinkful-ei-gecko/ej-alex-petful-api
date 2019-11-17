const Queue = require('../queue/Queue');
const queueHelpers = require('../queue/queueHelpers');

const dogsQueue = {
  dogArr: [
    {
      imageURL: 'https://images.dog.ceo/breeds/mix/IMG_2840.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Mumford',
      gender: 'M',
      age: 3,
      breed: 'Mutt',
      story: 'First to go.',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/pointer-german/n02100236_320.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Kiku',
      gender: 'F',
      age: 5,
      breed: 'Pointer',
      story: 'Next to go.',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/mountain-swiss/n02107574_640.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Fungus',
      gender: 'M',
      age: 13,
      breed: 'Is Dog',
      story: 'Just a dog',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'UniquedogName',
      gender: 'F',
      age: 3,
      breed: 'Chihuahua',
      story: 'Just a dog',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_5459.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Wiggles',
      gender: 'M',
      age: 1,
      breed: 'Toy Poodle',
      story: 'Just a dog',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_3453.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Cookie',
      gender: 'F',
      age: 4,
      breed: 'Irish Terrier',
      story: 'Just a dog',
    },
    {
      imageURL: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_10527.jpg',
      imageDescription: 'A beautiful sad dog',
      name: 'Ludo',
      gender: 'M',
      age: 8,
      breed: 'Spaniel',
      story: 'Just a dog',
    },
  ],

  queue: new Queue(),

  populateQueue() {
    this.dogArr.forEach((dog) => this.queue.enqueue(dog));
    return this.dogsQueue;
  },

  viewTopdog() {
    return queueHelpers.peek(this.queue);
  },

  dogAdopted() {
    const dog = this.queue.dequeue();
    this.queue.enqueue(dog);
    return dog;
  },
};

module.exports = dogsQueue;