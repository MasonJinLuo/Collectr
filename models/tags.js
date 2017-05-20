module.exports = function(sequelize, DataTypes) {

    var Tags = sequelize.define("Tags", {
        name: {
            type: DataTypes.STRING,
            allowNull: false, //not sure if we will allow null for this? are we requiring them to must have tags?
            validate: {
                len: [1]
            }
        }
    });

<<<<<<< HEAD
    // {
    // 	classMethod:{
    // 		associate: function(models){
    // 			this.hasMany(models.Post2Tag, {
    // 				foreignKey:{
    // 					allowNull: false
    // 				}
    // 			});
=======
    {
    	classMethods:{
    		associate: function(models){
    			this.hasMany(models.Post2Tag, {
    				foreignKey:{
    					allowNull: false
    				}
    			});
>>>>>>> e87ac889051fd9dffe3fcabeb42bd7bc9d1dd088

    // 		}
    // 	}
    // });

    return Tags;

};
