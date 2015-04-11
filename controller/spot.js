var router = require('express').Router();
var model  = require('../model');


router.route('/')
	.get(function(req, res) {
		model.Spot
			.findAll({
				include: [ { model: model.Material }, { model: model.Type }]
			})
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

router.route('/:id')
	.all(function(req, res, next) {
		next();
	})
	.get(function(req, res) {
		model.Spot
			.findAll({ where: {id : req.params.id}, include: [ { model: model.Material }, { model: model.Type }]})
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
		 
	})
	.put(function(req, res) {
		res.status(404).end();
	})
	.post(function(req, res) {
		res.status(404).end();
	})
	.delete(function(req, res) {
		res.status(404).end();
	});
module.exports = router;
