const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');
const User = require('./User');

class Deads extends Model {}

Deads.init(
    {
        id: {
            type:  DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 32]
            }
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isNumeric: true
            }
        },
        battle_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isNumeric: true
            }
        },
        image_url: {
            type: DataTypes.STRING,
            defaultValue: "https://th.bing.com/th/id/R.b21d741e778c548f64bdf140268e95aa?rik=MdbYxm13Xh6HoQ&pid=ImgRaw&r=0",
            allowNull:false,
            validate: {
                isURL: true
            }
        },
        monster_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "monsters",
                id: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                id: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "deads"
    }
);

module.exports = Deads;