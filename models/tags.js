module.exports = function(sequelize, DataTypes) {

    var Tags = sequelize.define("tags", {
        name: {
            type: DataTypes.STRING,
            allowNull: false, //not sure if we will allow null for this? are we requiring them to must have tags?
            validate: {
                len: [1]
            }
        }
    });

    {
    	classMethod:{
    		associate: function(models){
    			this.hasMany(models.Post2Tag, {
    				foreignKey:{
    					allowNull: false
    				}
    			});

    		}
    	}
    });

    return Tags;

};
