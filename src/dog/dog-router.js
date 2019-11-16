const express = require('express');
const dogsService = require('./dog-service');
const petsService = require('../pets/pets-service');

const jsonBodyParser = express.json();

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req, res, next) => {
    dogsService.getDogs(req.app.get('db'))
      .then(dogs => res.json(dogs))
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { image_url, image_description, name, gender, age, breed, story } = req.body;
    const newPet = { pet_type: 'dog', image_url, image_description, name, gender, age, breed, story };
    petsService.insertPet(req.app.get('db'), newPet)
      .then(pet => res.json(pet))
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