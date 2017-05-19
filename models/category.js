module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
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
    }, {
        classMethod: {
            associate: function(models) {
                this.hasMany(models.Post, {
                    foreignKey: {
                        foreignKey: 'category_id',
                        onDelete: "cascade"
                    }
                });
            }
        }
    });

    return Category;
};
