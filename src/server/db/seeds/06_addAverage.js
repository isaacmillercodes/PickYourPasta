exports.seed = function (knex, promise) {
  return Promise.all([
    knex('restaurants').update({
      avg: knex('restaurants').distinct('reviews.rest_id').join('reviews','restaurants.id', 'reviews.rest_id').avg('reviews.rating').groupBy('restaurants.id')
    })
  ]);

};
