const { Deads } = require('../models');

const deadsData = [
    {
        name: "Ghandi",
        level: 99,
        battle_count: 1,
        monster_id: 1,
        user_id:1,
    },
    {
        name: "Mother Terresa",
        level: 25,
        battle_count: 10,
        monster_id: 2,
        user_id: 2,
    },
    {
        name: "Elmo",
        level: 6,
        battle_count: 12,
        monster_id: 3,
        user_id: 4,
    },
    {
        name: "Pikachu",
        level: 9,
        battle_count: 9,
        monster_id: 4,
        user_id: 5,
    },
]

const seedDeads = () => Deads.bulkCreate(deadsData);

module.exports = seedDeads;