const express = require('express');
const catsServices = require('./cats-services');
const store = require('../store');

const catsRouter = express.Router();

catsRouter
  .route('/')
  .get((req,res,next) => {
    return res.status(200).json(catsServices.getOneCat(store));
  })
  .delete((req,res,next) => {
    catsServices.deleteCat(store);
    return res.status(204).end();
  });

catsRouter
  .route('/:cat_name')
  .get((req,res,next) => {
    const catName = req.params.cat_name;
    return res.status(200).json(catsServices.getNextCat(catName));
  });

module.exports = catsRouter;