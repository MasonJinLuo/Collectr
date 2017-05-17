module.exports = function(sequelize, DataTypes){
	var Board = sequelize.define("Board", {
		name: {
			type: DataTypes.STRING
			allowNull: false
			validate: {
        	len: [1]
      		}
		}
	},
	{
		classMethod:{
			associate: function(models){
				Board.belongsTo(models.user, {
					foreignKey:{
						allowNull: false
					}
				});

				Board.hasMany(models.catagory, {
					onDelete: "cascade"
				});
			}
		}
	});
	return Board;
};