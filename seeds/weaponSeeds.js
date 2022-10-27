const { Weapon } = require('../models');

const charData = [
    {
        name: "Iron Sword",
        damage: "1d6",
        price: 30
    },
    {
        name: "Steel Sword",
        damage: "2d6",
        price: 60
    },
    {
        name: "Mithril Sword",
        damage: "3d6",
        price: 90
    }
]

const seedWeapon = () => Weapon.bulkCreate(charData);

module.exports = seedWeapon;