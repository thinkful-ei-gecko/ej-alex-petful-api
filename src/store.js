const Queue = require('./queue/Queue');
const { mergeQueues, arrayFromQueue, copyQueue } = require('./queue/queueHelpers');

const STORE =
  [
    {
      type: 'cat',
      imageURL:
        'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street.'
    },
    {
      type: 'cat',
      imageURL:
        'https://www.catvet.ca/wp-content/uploads/2016/07/cathealth_kitty.jpg',
      imageDescription: 'Tan-colored kitten pawing at the camera.',
      name: 'Thunder',
      sex: 'Male',
      age: 1,
      breed: 'Tabby',
      story: 'Owner moved to another country.'
    },
    {
      type: 'cat',
      imageURL: 'https://images.immediate.co.uk/volatile/sites/4/2018/08/iStock_000044061370_Medium-fa5f8aa.jpg',
      imageDescription:
        'Ginger Domestic Short Hair with grey eyes, looking up to the camera.',
      name: 'Kitri',
      sex: 'Female',
      age: 7,
      breed: 'Domestic Short Hair',
      story: 'Stray.'
    },
    {
      type: 'cat',
      imageURL: 'https://static.pexels.com/photos/20787/pexels-photo.jpg',
      imageDescription:
        'Grey siamese cat with bright green eyes, looking up to the camera.',
      name: 'Tina',
      sex: 'Female',
      age: 3,
      breed: 'Siamese',
      story: 'Abandoned by previous owner.'
    },
    {
      type: 'cat',
      imageURL: 'https://www.cathaven.com.au/assets/cats/_resampled/croppedimage685450-4058680314268048674532858160440997726126080o.jpg',
      imageDescription:
        'Black Domestic Short Hair car with black eyes, looking attentively.',
      name: 'Kate',
      sex: 'Female',
      age: 2,
      breed: 'Black DSH',
      story: 'Rescued from the streets.'
    },
    {
      type: 'cat',
      imageURL: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg',
      imageDescription:
        'Domestic Short Hair with green eyes.',
      name: 'Crunch',
      sex: 'Male',
      age: 8,
      breed: 'DSH',
      story: 'Abandoned by previous owner.'
    },
    {
      type: 'dog',
      imageURL:
        'https://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden retriever',
      story: 'Owner passed away.'
    },
    {
      type: 'dog',
      imageURL:
        'https://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-1.jpg',
      imageDescription:
        'A German shepherd dog facing the camera, tongue out.',
      name: 'Tornado',
      sex: 'Female',
      age: 5,
      breed: 'German shepherd',
      story: 'Owner moved to a small aparment.'
    },
    {
      type: 'dog',
      imageURL: 'https://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
      imageDescription: 'A Husky dog facing the camera, tongue out.',
      name: 'June',
      sex: 'Female',
      age: 1,
      breed: 'Husky',
      story: 'Rejected by mother.'
    },
    {
      type: 'dog',
      imageURL: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg',
      imageDescription: 'A Rottweiler dog facing the camera, with open mouth.',
      name: 'Duchess',
      sex: 'Female',
      age: 1,
      breed: 'Rottweiler',
      story: 'Removed by authorities from squalid condtions.'
    },
    {
      type: 'dog',
      imageURL: 'https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b',
      imageDescription: 'A Labrador puppy running in a field.',
      name: 'Scottie',
      sex: 'Male',
      age: 1,
      breed: 'Labrador',
      story: 'Rejected by mother.'
    },
    {
      type: 'dog',
      imageURL: 'https://www.dogster.com/wp-content/uploads/2017/10/Havenese-1.jpg',
      imageDescription: 'A Havanese dog facing the camera, tongue out.',
      name: 'Cindy',
      sex: 'Female',
      age: 3,
      breed: 'Havanese',
      story: 'Confiscated by authorities from illegal trade.'
    }
  ];


//Generate queues for each pet type from STORE.
const catsQueue = new Queue();
STORE.forEach(pet => pet.type === 'cat' ? catsQueue.enqueue(pet) : null);

const dogsQueue = new Queue();
STORE.forEach(pet => pet.type === 'dog' ? dogsQueue.enqueue(pet) : null);

const shufflePets = (a, b) => {
  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < a.length || j < b.length) {
    if (i !== a.length) {
      newArr = [...newArr, a[i]];
      i++;
    }
    if (j !== b.length) {
      newArr = [...newArr, b[j]];
      j++;
    }
  }
  
  return newArr;
};

//Array version of cats/dogs queues, for use on pets endpoints.
function petLists() {
  let cats = arrayFromQueue(catsQueue);
  let dogs = arrayFromQueue(dogsQueue);
  let pets = shufflePets(cats, dogs);

  return {
    cats: cats,
    dogs: dogs,
    pets: pets
  };
}

module.exports = {
  STORE,
  catsQueue,
  dogsQueue,
  petLists
};