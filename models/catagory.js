module.exports = function(sequelize, DataTypes){
	var Catagory = sequelize.define("catagory", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}
	// {
	// 	classMethod:{
	// 		associate: function(models){
	// 			Catagory.hasMany(models.post, {
	// 				foreignKey:{
	// 					allowNull: false
	// 				}
	// 			});
	// 		}
	// 	}
	// });
	return Catagory;
};