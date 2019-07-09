const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/data.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ confirmation: `add path called` }));
});

app.get('/api/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ list: data.list, current: data.current });
  });



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);