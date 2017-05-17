module.exports = function(sequelize, DataTypes){
	var Pin = sequelize.define("Pin", {
		img: {
			type: DataTypes.STRING, // I dont know is it a string that we are storing? when someone uploads an image?
			allowNull: false,
			validate: {
        	len: [1]
      		}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true // i am not sure do we want to require the user to input a description? is that UI friendly?
			// validate: {
   //      	len: [1]
   //    		}
		},
		tags: {
			type: DataTypes.STRING,
			allowNull: true // i am not sure do we want to require the user to input a tag either? if we do, change to false, and uncomment validation
			// validate: {
   //      	len: [1]
   //    		}
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true // i am not sure do we want to require the user to input a rating either? if we do, change to false, and uncomment validation
			// validate: {
   //      	len: [1]
   //    		}
		},
		wanthas: {
			type: DataTypes.STRING,
			allowNull: false
			validate: {
        	len: [1]
      		}
		},

	},
	{
		classMethod:{
			associate: function(models){
				Pin.belongsTo(models.catagory, {
					foreignKey:{
						allowNull: false
					}
				});
			}
		}
	});
	return Pin;
};