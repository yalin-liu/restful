var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Path 1
app.get('/name/:name', function(req,res) {
	console.log('Incoming request: GET');
	console.log('Request body: ', req.body);
	console.log('name: ', req.params.name);
});

// Path 2
app.get('/age/:age', function(req,res) {
	console.log('Incoming request: GET');
	console.log('Request body: ', req.body);
	console.log('age: ', req.params.age);
});

// Path 3
app.get('/name/:name/age/:age', function(req,res) {
	console.log('Incoming request: GET');
	console.log('Request body: ', req.body);
	console.log('name: ', req.params.name);
	console.log('age: ', req.params.age);
});

// Path 4
app.delete('/name/:name', function(req,res) {
	console.log('Incoming request: DELETE');
	console.log('Request body: ', req.body);
	console.log('name: ', req.params.name);
});

// Path 5
app.post('/',function(req,res) {
	console.log('Incoming request: POST');
	console.log('Request body: ', req.body);
	console.log('name: ', req.body.name);
	console.log('age: ', req.body.age);
	res.sendStatus(200);
});

// Path 6
app.put('/',function(req,res) {
	console.log('Incoming request: PUT');
	console.log('Request body: ', req.body);
	console.log('name: ', req.body.name);
	console.log('age: ', req.body.age);
	res.sendStatus(200);
});

app.listen(process.env.PORT || 8099);
