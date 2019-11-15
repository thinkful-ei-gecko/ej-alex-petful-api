const xss = require('xss');

const catsService = {
  getCats(db) {
    return db
      .from('cats')
      .select('*')
      .orderBy('dateEntered');
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