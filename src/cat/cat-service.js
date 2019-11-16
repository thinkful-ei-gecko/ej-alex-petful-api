const xss = require('xss');

const catsService = {
  getCats(db) {
    return db
      .from('pets')
      .select('*')
      .where('pet_type', 'cat')
      .orderBy('date_entered');
  },
  getFirst(db) {
    return db
      .from('pets')
      .select('*')
      .where('pet_type', 'cat')
      .orderBy('date_entered')
      .first();
  },
  deleteFirstCat(db) {
    return db
      .from('pets')
      .select('id')
      .where('pet_type', 'cat')
      .orderBy('date_entered')
      .first()
      .then(id => {

        return db('pets')
          .where('id', id.id)
          .delete();
      });
  },
};

module.exports = catsService;