const express = require('express');
const petsService = require('./pets-service');

const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res, next) => {
    petsService.getPets(req.app.get('db'))
      .then(pets => {
        res.json(pets.map(pet => petsService.serializePet(pet)));
      });
  })
  .post((req, res, next) => {
    const { pet_type, image_url, image_description, name, gender, age, breed, story } = req.body;
    const newPet = { pet_type, image_url, image_description, name, gender, age, breed, story };
    petsService.insertPet(req.app.get('db'), newPet)
      .then(pet => res.json(pet))
      .catch(next);
  // })
  // .delete((req, res, next) => {

  });

module.exports = petsRouter;