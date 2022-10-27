const { Armor } = require('../models');

const armorData = [
    {
        name: "Iron Platemail",
        defense: 1,
        price: 30
    },
    {
        name: "Steel Platemail",
        defense: 2,
        price: 60
    },
    {
        name: "Mithril Platemail",
        defense: 3,
        price: 90
    }
]

const seedArmor = () => Armor.bulkCreate(armorData);

module.exports = seedArmor;