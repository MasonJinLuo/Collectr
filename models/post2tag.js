module.exports = function(sequelize, DataTypes){
	var Post2Tags = sequelize.define("Post2tag", {
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
	return Post2Tags;
};