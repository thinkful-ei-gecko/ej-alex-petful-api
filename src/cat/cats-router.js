const express = require('express');
const catsServices = require('./cats-services');
const STORE = require('../STORE');

const catsRouter = express.Router();

catsRouter
  .route('/')
  //Retrieves the first cat.
  .get((req,res,next) => {
    return res.status(200).json(catsServices.getOneCat(STORE));
  })
  //Deletes first cat.
  .delete((req,res,next) => {
    catsServices.deleteCat(STORE);
    return res.status(204).end();
  });

catsRouter
  //Retrieves cat by name.
  .route('/:cat_name')
  .get((req,res,next) => {
    const catName = req.params.cat_name;
    return res.status(200).json(catsServices.getNextCat(catName));
  });

module.exports = catsRouter;