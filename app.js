var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/about', function (req, res) {
  res.send('about');
});
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});