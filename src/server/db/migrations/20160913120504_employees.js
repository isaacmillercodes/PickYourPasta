
exports.up = function(knex, Promise) {
  return knex.schema.createTable(('employees'), (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('title');
    table.integer('rest_id');

  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
