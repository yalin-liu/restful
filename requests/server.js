var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/name/:name', function(req,res) {
	console.log('Incoming request: GET');
	console.log('name: ', req.params.name);
});

app.delete('/name/:name', function(req,res) {
	console.log('Incoming request: DELETE');
	console.log('name: ', req.params.name);
});

app.post('/',function(req,res) {
	console.log('Incoming request: POST');
	console.log('Request body: ', req.body);
	console.log('name: ', req.body.name);
	console.log('age: ', req.body.age);
	res.sendStatus(200);
});

app.put('/',function(req,res) {
	console.log('Incoming request: PUT');
	console.log('Request body: ', req.body);
	console.log('name: ', req.body.name);
	console.log('age: ', req.body.age);
	res.sendStatus(200);
});

app.listen(process.env.PORT || 8099);
