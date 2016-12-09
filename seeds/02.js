exports.seed = function(knex, Promise) {
  return knex('game').del()
    .then(function () {
      const game = [{
        id:1,
        name:'Grand Theft Auto V',
        rating: 'M',
        genre: 'Sandbox',
        dev_id: 1
      }, {
        id:2,
        name:'Counter Strike',
        rating: 'M',
        genre: 'FPS',
        dev_id: 4
      }, {
        id:3,
        name:'Team Fortress 2',
        rating: 'M',
        genre: 'FPS',
        dev_id: 4
      }, {
        id:4,
        name:'Portal',
        rating: 'T',
        genre: 'FPS',
        dev_id: 4
      }, {
        id:5,
        name:'Minecraft',
        rating: 'E',
        genre: 'Sandbox',
        dev_id: 3
      }, {
        id:6,
        name:'Call of Duty: Modern Warfare',
        rating: 'M',
        genre: 'FPS',
        dev_id: 2
      }];

      return knex('game').insert(game);
    });
};
