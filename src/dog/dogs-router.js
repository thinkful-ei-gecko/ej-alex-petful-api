const express = require('express');
const dogsServices = require('./dogs-services');
const STORE = require('../STORE');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  //Retrieves first dog.
  .get((req,res,next) => {
    return res.status(200).json(dogsServices.getOneDog(STORE));
  })
  //Deletes the first dog.
  .delete((req,res,next) => {
    dogsServices.deleteDog(STORE);
    return res.status(204).end();
  });

dogsRouter
  .route('/:dog_name')
  //Retrieves dog by name.
  .get((req,res,next) => {
    const dogName = req.params.dog_name;
    return res.status(200).json(dogsServices.getNextDog(dogName));
  });

module.exports = dogsRouter;