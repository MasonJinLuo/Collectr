module.exports = function(sequelize, DataTypes) {

    var Tags = sequelize.define("Tags", {
        name: {
            type: DataTypes.STRING,
            allowNull: false, //not sure if we will allow null for this? are we requiring them to must have tags?
            validate: {
                len: [1]
            }
        }
    },

    {
    	classMethods: {
    		associate: function(models){
    			this.hasMany(models.Post2tag, {
    				foreignKey: {
                        name: 'tag_id',
    					allowNull: false
    				}
    			});

    		}
    	}
    });

    return Tags;

};
