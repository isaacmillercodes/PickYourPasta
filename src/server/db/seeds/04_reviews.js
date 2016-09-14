const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(150);
  let arrayOfReviews = Array.from(numberOfArrays).map(() => {
    return createReview(knex);
  });
  return Promise.all(arrayOfReviews);
};

//helper function
function createReview(knex) {
  return knex('reviews')
  .insert({
    rest_id: faker.random.number({
      'min': 1,
      'max': 30
    }),
    user_id: faker.random.number({
      'min': 1,
      'max': 50
    }),
    review: faker.lorem.paragraph(),
    rating: faker.random.number({
      'min': 1,
      'max': 5
    })
  });
}
