
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game',(table)=>{
    table.increments();
    table.string('name');
    table.string('rating',3);
    table.string('genre');
    table.integer('dev_id').unsigned();
    table.foreign('dev_id').references('developer.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
};
