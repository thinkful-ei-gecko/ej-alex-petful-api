const xss = require('xss');
const catService = require('../cat/cat-service');
const dogService = require('../dog/dog-service');


const queueService = {
  addQueue(db) {
    return db
      .insert()
  }
};

module.exports = queueService;