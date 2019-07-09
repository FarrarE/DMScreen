const express = require('express');
const bodyParser = require('body-parser');
const list = require('./data/list.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ confirmation: `add path called` }));
});

app.get('/api/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ list: list });
  });



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);