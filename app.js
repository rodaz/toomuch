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

connection.connect();

// Static files
app.use(express.static(__dirname));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Root route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Get costs route
app.post('/costs', function (req, res) {
  connection.query('SELECT cost_id, a_name, plan_qty, plan_rate, plan_total, fact_qty, fact_rate, fact_total FROM costs '+
  'left join articles on article = article_id left join gilds on gild = gild_id where month='+req.body.month+' and year='+
    req.body.year+' ;', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });

});

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
