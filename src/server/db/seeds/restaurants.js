
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          id: 1,
          name: 'Deli Italiano',
          city:'Great Falls',
          state:'VA',
          cuisine:'Italian',
          description:'A quaint spot to get the best Italian',
          img_url:'http://www.miasorellaristorante.com/wp-content/uploads/2016/01/Il-Portico-Italian-Restaurant_4ef42_lg.jpg'
        })
      ]);
    });
};
