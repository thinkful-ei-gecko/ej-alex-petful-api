const xss = require('xss');

const catsService = {
  getQueue(db) {
    return db
      .from('cats, dogs')
      .select('*');
  },
};

module.exports = catsService;