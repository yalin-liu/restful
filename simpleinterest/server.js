var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// curl localhost:8099/simpleinterest/10000/0.01/10"
// curl --header "accept:application/json" "localhost:8099/simpleinterest/10000/0.01/10"
app.get('/simpleinterest/:principal/:rate/:time', function(req,res) {
	var r = new simpleInterest(Number(req.params.principal), Number(req.params.rate), Number(req.params.time));
	console.log(JSON.stringify(r));
	if (req.headers['accept'] == 'application/json') {		
		res.status(200).json(r);
	} else {
		res.status(200).render('result',{result:r});
	}
});

function simpleInterest(p,r,t) {
	this.principal = p;
	this.rate = r;
	this.time = t;
	this.interest = p * r * t;
}

app.listen(process.env.PORT || 8099);
