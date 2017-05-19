module.exports = function(sequelize, DataTypes){
	var PostTags = sequelize.define("PostTags", {
	},
	{
		classMethods:{
			associate: function(models){
				PostTags.belongsTo(models.post, {
					foreignKey:{

						allowNull: false
					}
				});

				PostTags.belongsTo(models.Tags, {
					foreignKey:{
						allowNull: false
					}
				});
			}
		}
	});
	return PostTags;
};