"use strict";

module.exports = function(sequelize, DataTypes) {
	var Discard = sequelize.define("Discard", {
		name: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				//Spot.belongsToMany(model.Material, { as: 'materials' })
				Discard.belongsToMany(model.Material, { through: 'DiscardMaterial' })
			}
		}
	});

	return Discard;
};
