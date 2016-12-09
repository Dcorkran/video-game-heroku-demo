exports.up = function(knex, Promise) {
  return knex.schema.createTable('developer', function(table){
    table.increments();
    table.string('name');
    table.string('state');
    table.string('size',1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('developer');
};
