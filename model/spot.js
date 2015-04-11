"use strict";

module.exports = function(sequelize, DataTypes) {
	var Spot = sequelize.define("Spot", {
		name: DataTypes.STRING,
		lat: DataTypes.FLOAT(53),
		lng: DataTypes.FLOAT(53),
		phone: DataTypes.STRING,
		site: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				Spot.belongsToMany(model.Material, { through: 'SpotMaterial' });
				Spot.belongsTo(model.Type);
			}
		}
	});

	return Spot;
};