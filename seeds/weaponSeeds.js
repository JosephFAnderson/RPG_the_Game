const { Weapon } = require('../models');

const weaponData = [
    {
        name: "Bronze Dagger",
        price: 15,
        damage: "1d4",       
    },
    {
        name: "Iron Sword",
        price: 300,        
        damage: "1d6"
    },
    {
        name: "Steel Battleaxe",
         price: 600,
         damage: "1d10"
    },
    {
        name: "Mithril Greatsword",        
        price: 900,
        damage: "2d6"
    },
    {
        name: "Adamantite Glaive",
        price: 1200,
        damage: "2d8"        
    }
]

const seedWeapon = () => Weapon.bulkCreate(weaponData);

module.exports = seedWeapon;