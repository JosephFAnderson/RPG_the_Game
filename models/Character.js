const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Character extends Model {}

Character.init(
  {
    id: {
        type: DataTypes.INTEGER,
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
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isNumeric: true
        }
      },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isNumeric: true
        }
    },
    gold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isNumeric: true
        }
    },
    battles_won: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isNumeric: true
        }
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://upload.wikimedia.org/wikipedia/en/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp",        
        validate: {
            isUrl: true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "users",
            id: 'id'
        }
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        references: {
            model: "weapons",
            id: "id"
        },
        validate: {
          isNumeric: true
        }
    },
    armor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        references: {
            model: "armors",
            id: "id"
        },
        validate: {
          isNumeric: true
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characters"
  }
);

module.exports = Character;