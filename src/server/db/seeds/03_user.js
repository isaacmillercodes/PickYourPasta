const faker = require('faker');
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(50);
  let arrayOfUsers = Array.from(numberOfArrays).map(() => {
    return createUser(knex);
  });
  return Promise.all(arrayOfUsers);
};

//helper function
function createUser(knex) {
  return knex('users')
  .insert({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });
}
