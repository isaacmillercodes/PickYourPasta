# Pick Your Pasta

Pick Your Pasta is a restaurant directory website where users can find restaurants and add reviews for restaurants they've visited.

<!-- dummy version -->
To visit Pick Your Pasta, go to:
https://pickyourpasta.herokuapp.com

To run locally:

1. Fork/clone this repo
1. npm install
1. create .env file with a SECRET_KEY and NODE_ENV (set to environment, see sample-env.md)
1. create a database called "Pasta"
1. knex migrate:latest
1. knex seed:run
1. run the app using gulp
