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
					foreignKey: {
						name: 'owner_id', 
						allowNull: false
					}
				});


				Post.belongsTo(models.user, {
					foreignKey: {
						name: 'user_id', 
						allowNull: false
					}
				});

				Post.belongsTo(models.Category, {
					foreignKey:{
						name: 'category_id', 
						allowNull: false
					}
				});
			}
		}
	});
	return Post;
};