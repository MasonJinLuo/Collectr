module.exports = function(sequelize, DataTypes){
	var PostTags = sequelize.define("post2tag", {
	},
	{
		classMethods:{
			associate: function(models){
				this.belongsTo(models.Post, {
					foreignKey:{
						name: 'post_id', 
						allowNull: false
					}
				});

				this.belongsTo(models.Tags, {
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