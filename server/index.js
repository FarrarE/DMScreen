const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/data.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/add', (req, res) => {

  var fs = require('fs')

  fs.readFile('./server/data/data.json', 'utf-8', function(err, data) {


    var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.list.push({
      name: req.body.name,
      init: req.body.init
    })
  
    fs.writeFile('./server/data/data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
      if (err) throw err
      console.log('Done!')
    })
  })
});

app.get('/api/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ list: data.list});

});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);