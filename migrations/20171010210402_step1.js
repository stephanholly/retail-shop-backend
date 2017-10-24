exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', function(table){
      table.integer('quantity');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', function(table){
      table.dropColumn('quantity');
    })
  ])
};
