"use strict";

module.exports = function(sequelize, DataTypes) {
	var Type = sequelize.define("Type", {
		name: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				//Type.belongsToMany(model.Material, { as: 'materials' })
				//Type.belongsToMany(model.Material, { through: 'DiscardMaterial' })
			}
		}
	});

	return Type;
};
