const xss = require('xss');

const dogsService = {
  getDogs(db) {
    return db
      .from('pets')
      .select('*')
      .where('type', 'dogs');
  }
};

module.exports = dogsService;