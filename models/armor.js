const { Model, DataTypes } =  require('sequelize');
const sequelize = require ('../config/connection');

class Armor extends Model {}
Armor.init(
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
    defense:{

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
    modelName: 'armors',
    }
);


module.exports = Armor;

