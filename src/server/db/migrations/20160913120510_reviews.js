exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.integer('rest_id').references('restaurants.id');
    table.integer('user_id').references('users.id');
    table.text('review').notNullable();
    table.integer('rating').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
