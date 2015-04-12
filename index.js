"use strict";

var fs			= require('fs');
var express		= require('express')
var	app 		= express();
var bodyParser 	= require('body-parser');
var multer 		= require('multer');
//node-geocoder

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

fs.readdirSync('./controller').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		var f = file.substr(0, file.lastIndexOf('.'))
  		app.use('/'+ f, require('./controller/'+ f));
	}
});

app.get('/syncdb', function(req, res) {
	var model = require('./model');
	model.sequelize.sync({force: true }).then(function () {});
	res.status(200).send();
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});
