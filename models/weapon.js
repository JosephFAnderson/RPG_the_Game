const { Model, DataTypes } =  require('sequelize');
const sequelize = require ('../config/connection');

class Weapon extends Model {}
Weapon.init(
    {
    id:{ 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement:true,
    },
    name:{

        type: DataTypes.STRING,
        allowNull: false,

    },
    damage:{

        type: DataTypes.INTEGER,
        allowNull: false,

    },
    price:{

        type: DataTypes.INTEGER,
        allowNULL:false,
    },




    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'weapon',
    }
);


module.exports = Weapon;











