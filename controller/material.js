var router = require('express').Router();
var model  = require('../model');


router.route('/')
	.get(function(req, res) {
		model.Material
			.findAll()
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
	})
	.post(function(req, res) {
		console.log(req.body);
  		res.json(req.body);
		//res.status(200).send(req.body);
	});

module.exports = router;
