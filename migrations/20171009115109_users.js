
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('cc_type');
    table.string('cc_name_on');
    table.string('cc_number');
    table.string('cc_code');
    table.string('cc_expire');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
