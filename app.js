"use strict";
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '192.168.1.1',
//   user: 'charges',
//   password: 'charges0',
//   database: 'charges'
// });
const connection = mysql.createConnection({
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
    connection.query('SELECT a_name as costName, rank, SUM(plan_qty) as planQty, SUM(plan_rate) as price, '+
      'SUM(plan_total) as planTotal, SUM(fact_qty) as factQty, SUM(fact_rate) as factTotal, SUM(fact_total) as diff '+
      'FROM costs '+
      'LEFT JOIN articles ON article = article_id WHERE month=\''+req.body.month+'\' and year='+
      req.body.year+' GROUP BY a_name;', function(err, rows) {
        if (err) throw err;
        console.log(rows);
        res.json(rows);
      }
    );
});

app.post('/month', function (req, res) {
  connection.query('SELECT * FROM lomonth;', function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/updLock', function(req, res) {
  connection.query('UPDATE lomonth SET lomonth.lock = '+req.body.lock+' WHERE lomonth.month_id='+req.body.id+' ;', function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/log', function(req, res) {
  connection.query('SELECT * FROM gilds WHERE g_log = \''+req.body.log+'\' AND g_pass = \''+req.body.pass+'\' ;', function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/userData', function(req, res) {
  connection.query('SELECT cost_id as costId, a_name as costName, rank, plan_qty as planQty, plan_rate as price, '+
      'plan_total as planTotal, fact_qty as factQty, fact_rate as factTotal, fact_total as diff FROM costs '+
      'LEFT JOIN articles ON article = article_id WHERE month=\''+req.body.month+'\' and year='+
      req.body.year+' and gild='+req.body.user+' ;', function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/update', function(req, res) {
  let str = req.body.field.substr(0, 4)+'_'+req.body.field[4].toUpperCase() + req.body.field.slice(5);
  connection.query('UPDATE costs SET '+str+' = '+req.body.value+' WHERE cost_id = '+req.body.id+' ;',
    function(err, result) {
      if(err) throw err;
      res.json(result);
    });
});

app.post('/arts', function(req, res) {
  connection.query('SELECT * FROM articles;', function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/art_upd', function(req, res) {
  connection.query('UPDATE articles SET a_name = \''+req.body.art.name+'\' , rank = \''+req.body.art.rank+'\' WHERE article_id = '+
      req.body.art.id+' ;', function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

app.post('/art_del', function(req, res) {
  connection.query('DELETE FROM articles WHERE article_id = '+ req.body.art.id+' ;', function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

app.post('/art_add', function(req, res) {
  connection.query('INSERT INTO articles (a_name, rank) VALUES ( \''+req.body.art.name+'\' , \''+req.body.art.rank+'\' );',
      function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
