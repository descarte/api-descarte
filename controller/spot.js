var router = require('express').Router();
var model  = require('../model');


router.route('/')
	.get(function(req, res) {
		model.Spot
			.findAll({
				//where: ['lat IS NOT NULL AND lng IS NOT NULL'],
				include: [ { model: model.Material }, { model: model.Type }]
			})
			.then(function(result) {
				res.status(200).send(result);
			}
		); 
	})
	.post(function(req, res) {
		model.Spot.create({
			name: req.body.name,
			lat: req.body.lat,
			lng: req.body.lng,
			phone: req.body.phone,
			site: req.body.site,
			TypeId: req.body.TypeId
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

