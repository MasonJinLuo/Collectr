module.exports = function(sequelize, DataTypes){
	var Catagory = sequelize.define("Catagory", {
		name: {
			type: DataTypes.STRING //i think?????? i will be pulling information from the dropdown box
			allowNull: false
		}
	},
	{
		classMethod:{
			associate: function(models){
				Catagory.belongsTo(models.board, {
					foreignKey:{
						allowNull: false
					}
				});

				Catagory.hasMany(models.pins, {
					onDelete: "cascade"
				});
			}
		}
	});
	return Catagory;
};