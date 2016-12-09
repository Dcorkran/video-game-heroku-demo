exports.seed = function(knex, Promise) {
  return knex('game').del()
    .then(function () {
      const game = [{
        name:'Grand Theft Auto V',
        rating: 'M',
        genre: 'Sandbox',
        dev_id: 1
      }, {
        name:'Counter Strike',
        rating: 'M',
        genre: 'FPS',
        dev_id: 4
      }, {
        name:'Team Fortress 2',
        rating: 'M',
        genre: 'FPS',
        dev_id: 4
      }, {
        name:'Portal',
        rating: 'T',
        genre: 'FPS',
        dev_id: 4
      }, {
        name:'Minecraft',
        rating: 'E',
        genre: 'Sandbox',
        dev_id: 3
      }, {
        name:'Call of Duty: Modern Warfare',
        rating: 'M',
        genre: 'FPS',
        dev_id: 2
      }];

      return knex('game').insert(game);
    });
};
