const express = require('express');
const queueService = require('./cat-service');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    queueService.getCats(req.app.get('db'))
      .then(cats => res.json(cats))
      .catch(next);
  })
  .delete((req, res, next) => {
    res.send('Cat Delete!');
  });

module.exports = catRouter;