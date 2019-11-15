const xss = require('xss');

const queueService = {
  getQueue(db) {
    return db
      .from('cats')
      .select('*')
      .from('dogs')
      .select('*')
      .orderBy('dateentered')
      .first();
  },
};

module.exports = queueService;