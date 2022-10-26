const { Character } = require('../models');

const characterData = [
    {
        name: "Chrissna",
        strength: 2,
        defense: 6,
        vitality: 5,
        level: 1,
        experience: 2,
        gold: 1000,
        battles_won: 1,
        user_id: 1,
    },
    {
        name: "Hunter",
        strength: 4,
        defense: 4,
        vitality: 6,
        level: 1,
        experience: 3,
        gold: 500,
        battles_won: 2,
        user_id: 2,
    },
    {
        name: "Diego",
        strength: 8,
        defense: 10,
        vitality: 1,
        level: 2,
        gold: 250,
        battles_won: 15,
        user_id: 3,
    },
    {
        name: 'Joseph',
        strength: 3,
        defense: 3,
        vitality: 12,
        level: 1,
        gold: 250,
        battles_won: 0,
        user_id: 1,
    }    
]

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;