var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var http = require('http');
var path = require('path');
var internetradio = require('node-internet-radio');

app.use(express.static(__dirname + '/public'));
app.use(cors());

var port = 3000;

var testStream = 'http://us3.internet-radio.com:8007';

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'listen.html'));
});

app.get('/currentSong', cors(), function(req, res) {
  internetradio.getStationInfo(testStream, function(error, station) {
    console.log(station);
    res.send(station.title);
  });
});
