exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments();
    table.string('name');
    table.integer('price');
    table.boolean('soldout');
    table.string('picurl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
