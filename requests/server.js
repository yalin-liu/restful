var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // expect POST/PUT message body contains json objects

// Path 0
app.get('/', function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	res.status(200).end('Connection closed');
});

// Path 1
app.get('/name/:name', function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('name: ' + req.params.name);
	res.status(200).end('Connection closed');
});

// Path 2
app.get('/age/:age', function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('age: ' + req.params.age);
	res.status(200).end('Connection closed');
});

// Path 3
app.get('/name/:name/age/:age', function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('name: ' + req.params.name);
	console.log('age: ' + req.params.age);
	res.status(200).end('Connection closed');
});

// Path 4
// curl -X DELETE localhost:8099/name/peter
app.delete('/name/:name', function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('name: ' + req.params.name);
	res.status(200).end('Connection closed');
});

// Path 5
// curl -H "Content-Type: application/json" -X POST -d '{"name":"peter","age": 10}' localhost:8099
app.post('/',function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('name: ' + req.body.name);
	console.log('age: ' + req.body.age);
	res.status(200).end('Connection closed');
});

// Path 6
// curl -H "Content-Type: application/json" -X PUT -d '{"name":"peter","age": 10}' localhost:8099
app.put('/',function(req,res) {
	console.log('Incoming request: ' + req.method);
	console.log('Path: ' + req.path);
	console.log('Request body: ', req.body);
	console.log('name: ' + req.body.name);
	console.log('age: ' + req.body.age);
	res.status(200).end('Connection closed');
});

app.listen(process.env.PORT || 8099);
