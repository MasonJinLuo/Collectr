module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
            // post_id: { 
            //     type: DataTypes.INTEGER,
            //     primaryKey: true,
            //     autoIncrement: true,
            //     allowNull: false 
            // },
            img_path: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

            //Stacy: Added columns for tracking up and down votes on a post
            upVote: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },

            downVote: {
                type: DataTypes.INTEGER,
                defaultValue: 0
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
            }
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.User, {
                    foreignKey: {
                        name: 'owner_id',
                        allowNull: false
                    }
                });


                this.belongsTo(models.User, {
                    foreignKey: {
                        name: 'user_id',
                        allowNull: false
                    }
                });

                this.belongsTo(models.Category, {
                    foreignKey: {
                        name: 'category_id',
                        allowNull: false
                    }
                });
            }
        }
    });
    return Post;
};
