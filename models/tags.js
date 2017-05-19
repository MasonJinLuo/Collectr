module.exports = function(sequelize, DataTypes){
	var Tags = sequelize.define("Tags", {
		name: {
			type: DataTypes.STRING,
			allowNull: false, //not sure if we will allow null for this? are we requiring them to must have tags?
			validate: {
        	len: [1]
      		}
		}
	}
	// {
	// 	classMethod:{
	// 		associate: function(models){
	// 			Tags.hasMany(models.PostTags, {
	// 				foreignKey:{
	// 					allowNull: false
	// 				}
	// 			});

	// 		}
	// 	}
	// });
	return Tags;
};