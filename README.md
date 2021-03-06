# PETFUL

API Demo: https://radiant-lake-18914.herokuapp.com/

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.


## Endpoints

### Dog

- GET api/dog
  Retrieve a list of all dogs in queue order.
- GET api/dog/first
  Retrieve the first dog.
- DELETE api/dog
  Dequeues the first dog and responds with dog.

### Cat

- GET api/cat
  Retrieve a list of all cats in queue order.
- GET api/cat/first
  Retrieve the first cat.
- DELETE api/cat
  Dequeues the first cat and responds with cat.

## Pets

- GET api/pets
  Retrieve all pets in cat/dog order by queue order.
