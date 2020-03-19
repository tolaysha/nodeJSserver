var express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')
var app = express();

var corsOptions = {
  origin: '192.168.0.15',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function (req, res) {
  res.send({response:123});
});
app.get('/about', function (req, res) {
  res.send('about');
});
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
app.post('/post', function (req, res) {
  console.log(req.body);
  console.log(res.body);
  
  res.send('POST request to the homepage');
});
app.post('/postPhoto',cors(corsOptions), function (req, res) {
  console.log(req.body);
  console.log(res.body);
  
  res.send({'email':'topaluyser@mlai.com','number':'89153447594'});
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