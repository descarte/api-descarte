var router = require('express').Router();
var model  = require('../model');


router.route('/')
	.get(function(req, res) {
		model.Situation
			.findAll()
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
	});

module.exports = router;
