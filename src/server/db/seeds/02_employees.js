const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(50);
  let arrayOfEmployees = Array.from(numberOfArrays).map(() => {
    return createEmployee(knex);
  });
  return Promise.all(arrayOfEmployees);
};

//helper function
let arrayOfTitles = ['dishwasher', 'head chef', 'waiter', 'bartender', 'busser', 'manager'];

function createEmployee(knex) {
  return knex('employees')
  .insert({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    title: assignTitle(arrayOfTitles),
    rest_id: faker.random.number({
      'min': 1,
      'max': 30
    })
  });
}

function assignTitle(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
