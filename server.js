const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const server = require('http').Server(app);

const jsonParser = bodyParser.json();

//const cors = require('cors');
//app.use(cors());

const port = process.env.port || 5100;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/my-cocktails', {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB connection ok");
});
/*
let Vote = require('./model/vote.model');
let Cocktail = require('./model/cocktail.model');
let Ingredient = require('./model/ingredient.model');
*/

//CRUD vote

app.post('/api/vote', (req, res) => {
  // TODO
  res.status(200).json('OK');
});

app.get('/api/vote', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

app.put('/api/vote', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

app.delete('/api/vote', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

//CRUD cocktail

app.post('/api/cocktail', jsonParser, (req, res) => {
  // TODO
  res.status(200).json('OK');
});

app.get('/api/cocktail', (req, res) => {
  //TODO
  res.status(200).json({msg: 'OK', cocktail: c_cocktail});
});

app.put('/api/cocktail', jsonParser,  (req, res) => {
  //TODO
  if(req.body.picture_path){
    u_cocktail.picture_path = req.body.picture_path;
  }
  if(req.body.desc){
    u_cocktail.desc = req.body.desc;
  }
  if(req.body.ingredients){
    u_cocktail.ingredients = req.body.ingredients;
  }
  if(req.body.etapes){
    u_cocktail.etapes = req.body.etapes;
  }
  if(req.body.public){
    u_cocktail.public = req.body.public;
  }
  res.status(200).json({msg: 'OK'});
});

app.delete('/api/cocktail', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

//CRUD ingredient

app.post('/api/ingredient', (req, res) => {
  // TODO
  res.status(200).json('OK');
});

app.get('/api/ingredient', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

app.put('/api/ingredient', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

app.delete('/api/ingredient', (req, res) => {
  //TODO
  res.status(200).json('OK');
});

server.listen(port, (err) => {
    if (err) throw err;
    console.log('Ready on port ' + port);
});