exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1471367029819-38078e88c3fb'
    })
    .where('cuisine', 'Thai'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1428660386617-8d277e7deaf2'
    })
    .where('cuisine', 'American'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1470338950318-40320a722782'
    })
    .where('cuisine', 'Indian'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1456006231177-735d43fb45ac'
    })
    .where('cuisine', 'Greek'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1453831362806-3d5577f014a4'
    })
    .where('cuisine', 'Caribbean'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1464093515883-ec948246accb'
    })
    .where('cuisine', 'Japanese'),
    knex('restaurants')
    .update({
      image_url: 'https://hd.unsplash.com/photo-1453831210728-695502f9f795'
    })
    .where('cuisine', 'Italian')
  ]);
};
