const express = require('express');
const catsService = require('./cat-service');
const petsService = require('../pets/pets-service');

const jsonBodyParser = express.json();

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    catsService.getCats(req.app.get('db'))
      .then(cats => res.json(cats))
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { image_url, image_description, name, gender, age, breed, story } = req.body;
    const newPet = { pet_type: 'cat', image_url, image_description, name, gender, age, breed, story };
    petsService.insertPet(req.app.get('db'), newPet)
      .then(pet => res.json(pet))
      .catch(next);
  })
  .delete((req, res, next) => {
    catsService.deleteFirstCat(req.app.get('db'), req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });


catRouter
  .route('/first')
  .get((req, res, next) => {
    catsService.getFirst(req.app.get('db'))
      .then(cat => res.json(cat))
      .catch(next);
  });

module.exports = catRouter;