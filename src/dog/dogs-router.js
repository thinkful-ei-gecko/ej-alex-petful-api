const express = require('express');
const dogsQueue = require('./dogs-queue');

const jsonBodyParser = express.json();

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).send(dogsQueue.viewTopdog());
  })
  .delete((req, res, next) => {
    res.status(200).send(dogsQueue.dogAdopted());
  });

module.exports = dogsRouter;