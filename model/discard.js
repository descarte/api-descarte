"use strict";

module.exports = function(sequelize, DataTypes) {
	var Discard = sequelize.define("Discard", {
		title: DataTypes.STRING,
		lat: DataTypes.FLOAT(53),
		lng: DataTypes.FLOAT(53),
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		description: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				Discard.belongsToMany(model.Material, { through: 'DiscardMaterial' });
				Discard.belongsTo(model.Situation);
			}
		}
	});

	return Discard;
};