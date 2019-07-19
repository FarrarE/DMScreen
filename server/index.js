const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/data.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/add', (req, res) => {
  console.log(req.body.name);
  res.send();
});

app.get('/api/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ list: data.list});
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);