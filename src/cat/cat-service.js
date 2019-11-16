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
  }
};

module.exports = catsService;