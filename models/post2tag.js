module.exports = function(sequelize, DataTypes) {
    var Post2Tags = sequelize.define("Post2Tags", {
        // post2tag_id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        // tag_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
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
                this.belongsTo(models.Post, {
                    foreignKey: {
                        name: 'post_id',
                        allowNull: false
                    }
                });

                this.belongsTo(models.Tags, {
                    foreignKey: {
                        name: 'tag_id',
                        allowNull: false
                    }
                });
            }
        }
    });
    return Post2Tags;
};
