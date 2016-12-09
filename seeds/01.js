exports.seed = function(knex, Promise) {
  return knex('developer').del()
    .then(function () {
      const developer = [{
        id:1,
        name:'Rockstar',
        state: 'CA',
        size: 'L'
      }, {
        id:2,
        name:'Activision',
        state: 'CA',
        size: 'L'
      }, {
        id:3,
        name:'Mojang',
        state: 'NY',
        size: 'S'
      }, {
        id:4,
        name:'Valve',
        state:'WA',
        size:'L'
      }];

      return knex('developer').insert(developer);
    });
};
