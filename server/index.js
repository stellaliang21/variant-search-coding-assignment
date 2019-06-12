const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const pool = require('../database/postgresql/queries.js').pool;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/gene/:gene', (req, res) => {
  const geneName = req.params.gene.toUpperCase();
  const getResults = `SELECT * FROM variants WHERE gene = '${geneName}'`;
  pool.query(getResults, (error, results) => {
    if (error) {
      res.status(500).end();
    } else {
      res.send(results);
    }
  });
});

app.get('/geneName', (req, res) => {
  const getResults = `SELECT gene FROM variants`;
  pool.query(getResults, (error, results) => {
    if (error) {
      res.status(500).end();
    } else {
      const result = [];
      for (let i = 0; i < results.rows.length; i++) {
        if (!result.includes(results.rows[i].gene)) {
          result.push(results.rows[i].gene);
        }
      }
      res.send(result);
    }
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));