const express = require('express');
const petsService = require('./pets-service');
const jsonBodyParser = express.json();

const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res, next) => {
    petsService.getPets(req.app.get('db'))
      .then(pets => {
        res.json(pets.map(pet => petsService.serializePet(pet)));
      });
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { pet_type, image_url, image_description, name, gender, age, breed, story } = req.body;
    const newPet = { pet_type, image_url, image_description, name, gender, age, breed, story };

    if (newPet.pet_type == null) {
      return res.status(400).json({
        error: `Missing pet type in request body.`
      });
    }
    
    petsService.insertPet(req.app.get('db'), newPet)
      .then(pet => res.json(pet))
      .catch(next);
  });

petsRouter
  .route('/first')
  .get((req, res, next) => {
    petsService.getFirst(req.app.get('db'))
      .then(pet => {
        res.json(petsService.serializePet(pet));
      })
      .catch(next);
  });

petsRouter
  .route('/:id')
  .get((req, res, next) => {
    petsService.getById(req.app.get('db'), req.params.id)
      .then(pet => {
        res.json(petsService.serializePet(pet));
      })
      .catch(next);
  });

module.exports = petsRouter;