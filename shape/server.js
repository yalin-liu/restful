const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/api/square/area/:length', (req,res) => {
	let result = {};
	result.length = req.params.length;
	result.area = result.length ** 2;
	res.status(200).json(result);
});

app.get('/square/area/:length', (req,res) => {
	res.status(200).end(`Area of square having length ${req.params.length} = ${req.params.length ** 2}`);
})

// curl --header "accept:application/json" "localhost:8099/api/square/area/17"

app.listen(process.env.PORT || 8099);
