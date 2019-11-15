const express = require('express');
const catsService = require('./cat-service');


const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    catsService.getCats(req.app.get('db'))
      .then(cats => res.json(cats))
      .catch(next);
  });

catRouter
  .route('/:id')
  .get((req, res, next) => {
    catsService.getById(req.app.get('db'), req.params.id)
      .then(cat => res.json(cat))
      .catch(next);
  })
  .delete((req, res, next) => {
    catsService.deleteCat(req.app.get('db'), req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = catRouter;