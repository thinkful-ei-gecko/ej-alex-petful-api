const xss = require('xss');

const dogsService = {
  getDogs(db) {
    return db
      .from('pets')
      .select('*')
      .where('type', 'dogs');
  },

  deleteDog(db, id) {
    return db('dogs')
      .where({ id })
      .first()
      .delete();
  },

  getById(db, id) {
    return db
      .from('dogs')
      .where({ id })
      .select('*')
      .first();
  },

  serializeDog(dog) {
    return {
      id: dog.id,
      imageurl: dog.imageurl,
      imagedescription: dog.imagedescription,
      name: dog.name,
      gender: dog.gender,
      age: dog.age,
      breed: dog.breed,
      story: dog.story,
      dateentered: dog.dateentered
    };
  }
};

module.exports = dogsService;