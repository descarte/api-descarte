var router = require('express').Router();
var model  = require('../model');


router.route('/')
	.get(function(req, res) {
		model.Discard
			.findAll({
				include: [ { model: model.Material }, { model: model.Situation }]
			})
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
	})
	.post(function(req, res) {
		model.Discard.create({
			title: req.body.title,
			lat: req.body.lat,
			lng: req.body.lng,
			name: req.body.name,
			email: req.body.email,
			description: req.body.description,
			SituationId: req.body.SituationId
		}).done(function (err, spot) {
			spot.setMaterials(req.body.Materials);
		});	
		res.json();
	});

router.route('/:id')
	.all(function(req, res, next) {
		next();
	})
	.get(function(req, res) {
		model.Discard
			.findAll({ where: {id : req.params.id}, include: [ { model: model.Material }, { model: model.Situation }]})
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
		 
	})
	.delete(function(req, res) {
		model.Discard
			.find(req.params.id)
			.then(function(result) {
				result.destroy({ force: true })
			}
		); 
		res.status(200).end();
	});

module.exports = router;