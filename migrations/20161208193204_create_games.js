
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('developer',(table)=>{
      table.increments();
      table.string('dev_name');
      table.string('state');
    }),
    knex.schema.createTable('game',(table)=>{
      table.increments();
      table.string('name');
      table.string('rating',3);
      table.string('genre');
      table.foreign('dev_id').references('developer.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('game'),
    knex.schema.dropTable('developer')
  ]);
};
