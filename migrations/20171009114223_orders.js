
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table) {
    table.increments();
    table.integer('product_id');
    table.integer('price');
    table.integer('quantity');
    table.integer('order_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
