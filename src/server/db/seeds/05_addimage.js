exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1458644267420-66bc8a5f21e4'
    })
    .where('cuisine', 'Thai'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1437526248130-8448edca2e36'
    })
    .where('cuisine', 'American'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1454334281609-87a89762912c'
    })
    .where('cuisine', 'Indian'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1470324161839-ce2bb6fa6bc3'
    })
    .where('cuisine', 'Greek'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1464901978424-7ccc357ddf95'
    })
    .where('cuisine', 'Caribbean'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1465911817134-741b5e473a1b'
    })
    .where('cuisine', 'Japanese'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1449791898646-5a6fdfa4b4dd'
    })
    .where('cuisine', 'Italian')
  ]);
};
