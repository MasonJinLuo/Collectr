module.exports = function(sequelize, DataTypes){
	var PostTags = sequelize.define("PostTags", {
	},
	{
		classMethods:{
			associate: function(models){
				PostTags.belongsTo(models.post, {
					foreignKey:{
						name: 'post_id', 
						allowNull: false
					}
				});

				PostTags.belongsTo(models.Tags, {
					foreignKey:{
						name: 'tag_id', 
						allowNull: false
					}
				});
			}
		}
	});
	return PostTags;
};