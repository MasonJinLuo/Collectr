module.exports = function(sequelize, DataTypes){
	var User = sequalize.define("user", {
		name: DataTypes.STRING
	},

	{
		classMethods: {
			associate: function(models) {

				User.hasMany(models.board, {
					onDelete: "cascade"
				});
			}
		}
	});
	return User;
};