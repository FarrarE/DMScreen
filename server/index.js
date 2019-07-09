const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/files", express.static('files'));

app.get('/api/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ confirmation: `add path called` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);