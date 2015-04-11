"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
//var connection = process.env.DATABASE_URL || "postgres://centeno@localhost/centeno";
var connection = process.env.DATABASE_URL || "postgres://@ec2-107-20-159-103.compute-1.amazonaws.com:5432/d6333mgostb22p";
/*var sequelize = new Sequelize(connection, { dialectOptions: {
        ssl: true
    }});*/



var sequelize = new Sequelize('d6333mgostb22p', 'jqlcwwvwcqpsdb', 'zw-8_5r-MJJAeaQ4r4UgPGEyWy', {
  host: 'ec2-107-20-159-103.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
    dialectOptions: {
        ssl: true
    }
});



var db        = {};


fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		var model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;