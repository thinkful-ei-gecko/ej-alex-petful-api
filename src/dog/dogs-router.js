const express = require('express');
const dogsServices = require('./dogs-services');
const store = require('../STORE');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .get((req,res,next) => {
    return res.status(200).json(dogsServices.getOneDog(store));
  })
  .delete((req,res,next) => {
    dogsServices.deleteDog(store);
    return res.status(204).end();
  });

dogsRouter
  .route('/:dog_name')
  .get((req,res,next) => {
    const dogName = req.params.dog_name;
    return res.status(200).json(dogsServices.getNextDog(dogName));
  });

module.exports = dogsRouter;