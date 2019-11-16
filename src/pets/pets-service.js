const xss = require('xss');

const petsService = {

  //Returns all pets by order of date entered.
  getPets(db) {
    return db
      .from('pets')
      .select('*')
      .orderBy('date_entered');
  },

  insertPet(db, pet) {
    return db
      .insert(pet)
      .into('pets')
      .returning('*');
  },

  deletePet(db, id) {
    return db('pets')
      .where({ id })
      .first()
      .delete();
  },

  serializePet(pet) {
    return {
      id: pet.id,
      petType: pet.pet_type,
      imageUrl: pet.image_url,
      imageDescription: pet.image_description,
      name: pet.name,
      gender: pet.gender,
      age: pet.age,
      breed: pet.breed,
      story: pet.story,
      dateEntered: new Date(pet.date_entered)
    };
  }

};

module.exports = petsService;