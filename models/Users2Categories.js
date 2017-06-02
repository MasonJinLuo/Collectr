
module.exports = function(sequelize, DataTypes) {
    var Users2Categories = sequelize.define("Users2Categories", {
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: sequelize.literal('NOW()')
        }
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Category, {
                    foreignKey: {
                        name: 'category_id',
                        allowNull: true
                    }
                });

                this.belongsTo(models.User, {
                    foreignKey: {
                        name: 'user_id',
                        allowNull: true
                    }
                });
            }
        }
    });
    return Users2Categories;
};