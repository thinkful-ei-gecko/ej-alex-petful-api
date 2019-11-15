const xss = require('xss');

const queueService = {
  getQueue(db) {
    return db
      .from('cats, dogs')
      .select('*')
      .orderBy('dateEntered')
      .first();
  },
};

module.exports = queueService;