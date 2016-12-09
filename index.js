const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/developer', (req,res)=>{
  knex('developer').then((data)=>{
    res.json(data);
  });
});

app.get('/game', (req,res)=>{
  knex('game').then((data)=>{
    res.json(data);
  });
});


app.get('/game/:id', (req,res)=>{
  knex('game')
  .where('id', req.params.id)
  .then((data)=>{
    res.json(data);
  });
});

app.get('/developer/:id', (req,res)=>{
  knex('developer')
  .where('id', req.params.id)
  .then((data)=>{
    res.json(data);
  });
});

app.get('/gamebydev/:devName', (req,res)=>{
  knex.select('game.name', 'game.rating', 'game.genre')
  .from('game')
  .innerJoin('developer', 'game.dev_id', 'developer.id')
  .where('developer.name', req.params.devName)
  .then((data)=>{
    res.json(data);
  });
});

app.post('/developer',(req,res)=>{
  knex('developer').insert({
    name:req.body.name,
    state:req.body.state,
    size:req.body.size
  })
  .returning('id','name','state','size')
  .then((data)=>{
    res.json(data);
  });
});

app.post('/game',(req,res)=>{
  knex('game').insert({
    name:req.body.name,
    rating:req.body.rating,
    genre:req.body.genre,
    dev_id:req.body.dev_id
  })
  .returning('id','name','rating','genre','dev_id')
  .then((data)=>{
    res.json(data);
  });
});
