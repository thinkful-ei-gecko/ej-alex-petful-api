const xss = require('xss');

const catsService = {
  getCats(db) {
    return db
      .from('pets')
      .select('*')
      .where('pet_type', 'cat')
      .orderBy('date_entered');
  },
  getFirstCat(db) {
    return db
      .from('pets')
      .select('*')
      .where('pet_type', 'cat')
      .orderBy('date_entered')
      .first();
  },
  deleteCat(db, id) {
    return db('cats')
      .where({ id })
      .first()
      .delete();
  },
  getById(db, id) {
    return db
      .from('cats')
      .where({ id })
      .select('*')
      .first();
  },
};

module.exports = catsService;