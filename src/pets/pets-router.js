const express = require('express');
const { petLists } = require('../STORE');

const petsRouter = express.Router();

//Retrieves array listing all pets, alternating cat/dog, in queue order first to last.
petsRouter
  .route('/')
  .get((req, res, next) => {
    res.json(petLists().pets);
  });

//Retrieves array listing all cats, first to last.
petsRouter
  .route('/cats')
  .get((req, res, next) => {
    res.json(petLists().cats);
  });

//Retrieves array listing all dogs, first to last.
petsRouter
  .route('/dogs')
  .get((req, res, next) => {
    res.json(petLists().dogs);
  });

module.exports = petsRouter;