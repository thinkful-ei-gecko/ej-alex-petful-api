const express = require('express');
const { petLists } = require('../STORE');

const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res, next) => {
    res.json(petLists().pets);
  });

petsRouter
  .route('/cats')
  .get((req, res, next) => {
    res.json(petLists().cats);
  });

petsRouter
  .route('/dogs')
  .get((req, res, next) => {
    res.json(petLists().dogs);
  });

module.exports = petsRouter;