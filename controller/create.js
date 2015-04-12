var router = require('express').Router();
var model  = require('../model');
var request = require("request");
var fs = require('fs');

router.route('/').get(function(req, res) {
	res.status(200).send('<a href="situation">situation</a><br><a href="type">type</a><br><a href="material">material</a><br> <a href="ecopontos">ecopontos</a><br> <a href="pilhas">pilhas</a><br> <a href="eletronicos">eletronicos</a><br> <a href="oleo">oleo</a><br> <a href="pneus">pneus</a><br> <a href="remedios">remedios</a><br> <a href="container">container</a><br> <a href="lixeira">lixeira</a>');
});

router.route('/situation').get(function(req, res) {
	model.Situation.create({ id:1, name: 'Novo' });
	model.Situation.create({ id:2, name: 'Semi-novo' });
	model.Situation.create({ id:3, name: 'Resíduo' });
	res.status(200).send('Situations criados com sucesso.');
});

router.route('/type').get(function(req, res) {
	model.Type.create({ id:1, name: 'Container' });
	model.Type.create({ id:2, name: 'Cooperativa' });
	model.Type.create({ id:3, name: 'Ecoponto' });
	model.Type.create({ id:4, name: 'Lixeira' });
	model.Type.create({ id:5, name: 'Ponto de descarte' });
	model.Type.create({ id:6, name: 'Reciclagem' });
	res.status(200).send('Types criados com sucesso.');
});

router.route('/material').get(function(req, res) {
	model.Material.create({ id:1, name: 'Eletrodoméstico' });
	model.Material.create({ id:2, name: 'Eletrônico' });
	model.Material.create({ id:3, name: 'Entulho' });
	model.Material.create({ id:4, name: 'Latinha' });
	model.Material.create({ id:5, name: 'Lixo comum' });
	model.Material.create({ id:6, name: 'Madeira' });
	model.Material.create({ id:7, name: 'Móvel' });
	model.Material.create({ id:8, name: 'Oleo' });
	model.Material.create({ id:9, name: 'Outros' });
	model.Material.create({ id:10, name: 'Pilha' });
	model.Material.create({ id:11, name: 'Pneu' });
	model.Material.create({ id:12, name: 'Remédio' });
	model.Material.create({ id:13, name: 'Resíduo em geral' });
	model.Material.create({ id:14, name: 'Sucata' });
	res.status(200).send('Materials criados com sucesso.');
});

router.route('/ecopontos').get(function(req, res) {
	fs.readFile('./db/ecopontos.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				site: '',
				TypeId: 3
			}).done(function (err, spot) {
				spot.setMaterials([6, 4, 7, 3, 14, 1, 13]);
			});			
		});
	});
	res.status(200).send('Ecopontos importados com sucesso.');
})

router.route('/pilhas').get(function(req, res) {
	fs.readFile('./db/pilhas.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				site: e.site,
				TypeId: 5
			}).done(function (err, spot) {
				spot.setMaterials([10]);
			});			
		});
	});
	res.status(200).send('Pilhas importados com sucesso.');
});

router.route('/eletronicos').get(function(req, res) {
	fs.readFile('./db/eletronicos.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				site: e.site,
				TypeId: 5
			}).done(function (err, spot) {
				spot.setMaterials([2]);
			});			
		});
	});
	res.status(200).send('Eletronicos importados com sucesso.');
});

router.route('/oleo').get(function(req, res) {
	fs.readFile('./db/oleo.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.empresa_coletora != '' ? e.empresa_coletora : e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				TypeId: 6
			}).done(function (err, spot) {
				spot.setMaterials([8]);
			});			
		});
	});
	res.status(200).send('Oleos importados com sucesso.');
});


router.route('/pneus').get(function(req, res) {
	fs.readFile('./db/pneus.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				TypeId: 6
			}).done(function (err, spot) {
				spot.setMaterials([11]);
			});			
		});
	});
	res.status(200).send('Pneus importados com sucesso.');
});

router.route('/remedios').get(function(req, res) {
	fs.readFile('./db/remedios.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.nome,
				lat: e.latitude,
				lng: e.longitude,
				phone: e.telefone,
				site: e.site,
				TypeId: 5
			}).done(function (err, spot) {
				spot.setMaterials([12]);
			});			
		});
	});
	res.status(200).send('Remedios importados com sucesso.');
});

router.route('/container').get(function(req, res) {
	fs.readFile('./db/container.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.LOGRADOURO,
				lat: e.LATITUDE,
				lng: e.LONGITUDE,
				TypeId: 1
			}).done(function (err, spot) {
				spot.setMaterials([5]);
			});			
		});
	});
	res.status(200).send('Containers importados com sucesso.');
});

router.route('/lixeira').get(function(req, res) {
	fs.readFile('./db/lixeira.json', function (err, data) {
		if (err) throw err;
		JSON.parse(data).forEach(function(e){
			model.Spot.create({
				name: e.NOME,
				lat: e.LATITUDE,
				lng: e.LONGITUDE,
				TypeId: 4
			}).done(function (err, spot) {
				spot.setMaterials([5]);
			});			
		});
	});
	res.status(200).send('Lixeiras importados com sucesso.');
});

module.exports = router;
