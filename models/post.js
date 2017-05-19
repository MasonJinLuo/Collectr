module.exports = function(sequelize, DataTypes){
	var Post = sequelize.define("post", {
		img_path: {
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
		classMethods:{
			associate: function(models){
				Post.belongsTo(models.user, {
					foreignKey:{

						allowNull: false
					}
				});

				Post.belongsTo(models.catagory, {
					foreignKey:{

						allowNull: false
					}
				});
			}
		}
	});
	return Post;
};