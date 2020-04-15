var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(5000);