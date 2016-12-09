require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/video-game-demo'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
