# video-game-heroku-demo
Playing around with Heroku, Express and knex to make a videogame api and database

[Link to Heroku](https://video-game-demo.herokuapp.com/)

## How to Use
---
1. You can use https://video-game-demo.herokuapp.com/game to show the current game table
1. You can use https://video-game-demo.herokuapp.com/developer to show the current game table
1. You can use the select the id of an item in the game table by going to https://video-game-demo.herokuapp.com/game/:id
1. You can use the select the id of an item in the developer table by going to https://video-game-demo.herokuapp.com/developer/:id
1. You can add an item to developer by sending a post request with a json with name, state, and size to https://video-game-demo.herokuapp.com/developer
1. You can add an item to developer by sending a post request with a json with name, rating,genre and dev_id (must match a key in developer.id) to https://video-game-demo.herokuapp.com/game
1. You can use https://video-game-demo.herokuapp.com/gamebydev/:devName to show a list of games by a developer name (try Valve)
