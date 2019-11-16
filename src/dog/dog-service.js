const xss = require('xss');
const petsService = require('../pets/pets-service');

const dogsService = {
  getDogs(db) {
    return db
      .from('pets')
      .select('*')
      .where('type', 'dogs');
  },
  getFirstDog(db) {
    return db
      .from('pets')
      .select('*')
      .where('pet_type', 'dog')
      .orderBy('date_entered')
      .first();
  },
  deleteFirstDog(db) {
    return db
      .from('pets')
      .select('id')
      .where('pet_type', 'dog')
      .orderBy('date_entered')
      .first()
      .then(id => {
        petsService.deletePetById(db, id);
      });
  },
};

module.exports = dogsService;