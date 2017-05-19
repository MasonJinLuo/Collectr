module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("user", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
        	len: [1]
      		}
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        	len: [8]
      		}
      	},

      	image: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        	len: [1]
      		}
		},

		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
        	len: [1]
      		}
      	}
	},


	{
		classMethods: {
			associate: function(models) {

				User.hasMany(models.post, {
					onDelete: "cascade"
				});
			}
		}
	
	});
	return User;
};