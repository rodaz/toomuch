var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Static files
app.use(express.static(__dirname));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Root route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
