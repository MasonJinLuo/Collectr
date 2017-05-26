
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 15]
            }
        },

        image_path: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: sequelize.literal('NOW()')
        },

        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: sequelize.literal('NOW()')
        },
    }, 
    {
        classMethods: {
            associate: function(models) {

                this.hasMany(models.Post, {
                    foreignKey: 'user_id',
                    onDelete: "cascade"
                });
            }
        }

    });
    return User;
};
