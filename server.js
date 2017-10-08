var express = require('express');
var app = express();
var cors = require('cors');
var http = require('http');
var path = require('path');
var internetradio = require('node-internet-radio');

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;

var stream = 'http://96.31.83.86:8091';

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'listen.html'));
});

app.get('/currentSong', function(req, res) {
  internetradio.getStationInfo(stream, function(error, station) {
    console.log(station);
    res.send(station.title);
  });
});
