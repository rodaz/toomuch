var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'toomuch'
});

// Static files
app.use(express.static(__dirname));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Root route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/costs', function (req, res) {

  connection.connect();

  connection.query('SELECT * FROM costs', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0]);
    res.json(rows);
  });

  connection.end();

});

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
