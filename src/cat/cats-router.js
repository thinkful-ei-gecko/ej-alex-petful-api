const express = require('express');
const catsQueue = require('./cats-queue');

const jsonBodyParser = express.json();

const catsRouter = express.Router();

catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).send(catsQueue.viewTopCat());
  })
  .delete((req, res, next) => {
    res.status(200).send(catsQueue.catAdopted());
  });

module.exports = catsRouter;