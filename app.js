const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
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

function go(arts, req){
  let result = [];
  for(let j=0; j<arts.length; j++) {
    connection.query('SELECT cost_id, a_name, plan_qty, plan_rate, plan_total, fact_qty, fact_rate, fact_total FROM costs '+
      'left join articles on article = article_id where month='+req.body.month+' and year='+
      req.body.year+' and article='+arts[j].article_id+' ;', function (err, rows) {
      if (err) throw err;
      if (rows[0]) {
        //console.log('HER '+rows[0]);
        let temp = [
          {cost_id: 0},
          {a_name: rows[0].a_name},
          {plan_qty: 0},
          {plan_rate: 0},
          {plan_total: 0},
          {fact_qty: 0},
          {fact_rate: 0},
          {fact_total: 0}
        ];
        for (let i = 0; i < rows.length; i++) {
          temp[2].plan_qty += rows[i].plan_qty;
          temp[3].plan_rate += rows[i].plan_rate;
          temp[4].plan_total += rows[i].plan_total;
          temp[5].fact_qty += rows[i].fact_qty;
          temp[6].fact_rate += rows[i].fact_rate;
          temp[7].fact_total += rows[i].fact_total;
        }
        result.push(temp);
      }
    });
  }

  //setTimeout(function(){console.log('hehe '+result);}, 3000);
  return result;
}

// Get costs route
app.post('/costs', function (req, res) {

  // connection.query('SELECT cost_id, a_name, plan_qty, plan_rate, plan_total, fact_qty, fact_rate, fact_total FROM costs '+
  //   'left join articles on article = article_id left join gilds on gild = gild_id where month='+req.body.month+' and year='+
  //   req.body.year+' ;', function (err, rows, fields) {
  //   if (err) throw err;
  //   res.json(rows);
  // });
  let arts;
  let result = [];
  connection.query('SELECT article_id FROM articles;', function (err, rows) {
    //if (err) throw err;
    arts = rows;

    result = go(arts, req);

    console.log(result);
    setTimeout(function () {res.json(result);}, 3000);
    //res.json(result);

    // for(let j=0; j<arts.length; j++) {
    //   connection.query('SELECT cost_id, a_name, plan_qty, plan_rate, plan_total, fact_qty, fact_rate, fact_total FROM costs '+
    //     'left join articles on article = article_id where month='+req.body.month+' and year='+
    //     req.body.year+' and article='+arts[j].article_id+' ;', function (err, rows) {
    //     //if (err) throw err;
    //     if (rows[0]) {
    //       //console.log('HER '+rows[0]);
    //       let temp = [
    //         {cost_id: 0},
    //         {a_name: rows[0].a_name},
    //         {plan_qty: 0},
    //         {plan_rate: 0},
    //         {plan_total: 0},
    //         {fact_qty: 0},
    //         {fact_rate: 0},
    //         {fact_total: 0}
    //       ];
    //       for (let i = 0; i < rows.length; i++) {
    //         temp[2].plan_qty += rows[i].plan_qty;
    //         temp[3].plan_rate += rows[i].plan_rate;
    //         temp[4].plan_total += rows[i].plan_total;
    //         temp[5].fact_qty += rows[i].fact_qty;
    //         temp[6].fact_rate += rows[i].fact_rate;
    //         temp[7].fact_total += rows[i].fact_total;
    //       }
    //       result.push(temp);
    //     }
    //     if (j>=arts.length-1){
    //       console.log(result);
    //       res.json(result);
    //     }
    //
    //       //console.log(result[0]);
    //
    //       //res.json(result);
    //
    //     //console.log('eblan '+result);
    //   });

    //}

    //setTimeout(function(){result = go(artses, req);console.log(result);
    //  res.json(result);},0);

  });
   // console.log(result);
   // res.json(result);
});

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
