const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Monster extends Model {}

Monster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: "Deads",
                id: ''
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 32]
            }
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        vitality: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        experience_given: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            },
        },
        gold_dropped: {
            type: Datatypes.INTEGER,

        }

    }
)