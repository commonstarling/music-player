var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var http = require('http');
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(cors());

var port = 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'listen.html'));
});

app.get('/currentSong', cors(), function(req, res) {
  http
    .get('http://96.31.83.86:8091/played.html/', function(res) {
      res.on('error', function(err) {
        console.log('res error', err);
      });
    })
    .on('error', function(err) {
      console.log('req error', err);
    });
});
