const express = require('express');
const xss = require('xss'); //remove when services done
const dogsService = require('./dog-service');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req, res, next) => {
    dogsService.getDogs(req.app.get('db'))
      .then(dogs => res.json(dogs))
      .catch(next);
  });

dogRouter
  .route('/:id')
  .get((req, res, next) => {
    dogsService.getById(req.app.get('db'), req.params.id)
      .then(dog => res.json(dog))
      .catch(next);
  })
  .delete((req, res, next) => {
    dogsService.deleteDog(req.app.get('db'), req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = dogRouter;