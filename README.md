# Express Boilerplate!

This is a boilerplate project used for starting new projects!

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

- GET /dog
  Retrieve a list of all dogs by date entered.
- GET /dog/first
  Retrieve the dog available for adoption.
- POST /dog
  Post a new dog.
- DELETE /dog
  Deletes the first dog in the list.
- GET /dog/:id
  Retrieve a dog by its id.

### Cat

- GET /cat
  Retrieve a list of all cats by date entered.
- GET /cat/first
  Retrieve the cat available for adoption.
- POST /cat
  Post a new cat.
- DELETE /cat
  Deletes the first cat in the list.
- GET /cat/:id
  Retrieve a cat by its id.

## Pets

- GET /pets
  Retrieve all pets by date entered.
- GET /pets/first
  Retrieve the pet available for adoption.
- POST /pets
  Post a new pet, so long as the pet_type is defined in the body.
- GET /pets/:id
  Retrieve any pet by its id.
