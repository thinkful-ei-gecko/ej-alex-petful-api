require('dotenv').config();
const express = require('express'),
  // morgan = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet'),
  { NODE_ENV } = require('./config');

const app = express();

// const morganOption = (NODE_ENV === 'production');
const catsRouter = require('./cat/cats-router');
const dogsRouter = require('./dog/dogs-router');
const petsRouter = require('./pets/pets-router');

// app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Petful is Go!');
});

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);
app.use('/api/pets', petsRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    //basic error on production
    response = { error: { message: 'server error' } };
  } else {
    //more complex error for development
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
