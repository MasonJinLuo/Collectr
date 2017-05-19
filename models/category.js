module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    // {
    // 	classMethod:{
    // 		associate: function(models){
    // 			category.hasMany(models.post, {
    // 				foreignKey:{
    // 					allowNull: false
    // 				}
    // 			});
    // 		}
    // 	}
    // });

    return Category;
};
