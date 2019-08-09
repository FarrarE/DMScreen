const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/data.json');
//const data = require('./server/data/sample.json');

const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/build")));

app.post('/api/save', (req, res) => {
  console.log(req.body.list);
  var fs = require("fs");
  var fileContent = JSON.stringify({list:req.body.list});

  fs.writeFile("./server/data/sample.json", fileContent, (err) => {
      if (err) {
          console.error(err);
          return;
      };
  });
});

app.get('/api/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ list: data.list});
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);