const express = require('express');
const path = require('path');
const http = require('http');

const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./routes')(app);



app.listen(3000, () => {
	console.log('Example app listening on port 3000');
});