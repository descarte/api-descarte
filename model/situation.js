"use strict";

module.exports = function(sequelize, DataTypes) {
	var Situation = sequelize.define("Situation", {
		name: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				//Type.belongsToMany(model.Material, { as: 'materials' })
				//Type.belongsToMany(model.Material, { through: 'DiscardMaterial' })
			}
		}
	});

	return Situation;
};
