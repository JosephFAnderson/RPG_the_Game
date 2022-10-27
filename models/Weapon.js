const { Model, DataTypes } =  require('sequelize');
const sequelize = require ('../config/connection');

class Weapon extends Model {}
Weapon.init(
    {
    id:{ 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    damage:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNULL:false,
    },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weapons',
    }
);


module.exports = Weapon;











