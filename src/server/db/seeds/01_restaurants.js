const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(30);
  let arrayOfRestaurants = Array.from(numberOfArrays).map(() => {
    return createRestaurantObject(knex);
  });
  return Promise.all(arrayOfRestaurants);
};

//helper functions
let cuisine = [
  'Chinese',
  'Greek',
  'Indian',
  'Creole',
  'Japanese',
  'Thai',
  'Italian',
  'Caribbean',
  'Italian',
  'American'
];

//assign random cuisine
function assignCuisine(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//assign data
function createRestaurantObject(knex) {
  return knex('restaurants')
  .insert({
    name: 'The ' + faker.address.streetName() + ' Restaurant',
    city: faker.address.city(),
    state: faker.address.state(),
    cuisine: assignCuisine(cuisine),
    description: faker.lorem.paragraph(),
    image_url: faker.image.food()
  });
}
