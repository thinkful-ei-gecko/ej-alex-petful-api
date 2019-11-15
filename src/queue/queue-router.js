const express = require('express');
const queueService = require('./queue-service');

const queueRouter = express.Router();

queueRouter
  .route('/')
  .get((req, res, next) => {
    queueService.getQueue(req.app.get('db'))
      .then(queue => res.json(queue))
      .catch(next);
  })
  .delete((req, res, next) => {

  });

module.exports = queueRouter;