module.exports = function(sequelize, DataTypes) {

    var Tags = sequelize.define("Tags", {
        // tag_id: { 
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false 
        // },
            name: {
                type: DataTypes.STRING,
                allowNull: false, //not sure if we will allow null for this? are we requiring them to must have tags?
                validate: {
                    len: [1]
                }
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
        },

        {
            classMethods: {
                associate: function(models) {
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
