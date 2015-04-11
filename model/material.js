"use strict";

module.exports = function(sequelize, DataTypes) {
	var Material = sequelize.define("Material", {
		name: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				//Material.belongsToMany(model.Spot, { through: 'SpotMaterial' })
			}
		}
	});

	return Material;
};