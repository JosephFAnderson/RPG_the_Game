const { monsters, Monsters } = require('../models');

const monstersData = [
    {
        name: "Toge",
        strenth: 6,
        defense: 6,
        vitality: 4,
        experience_given: 500,
        gold_dropped: 100,
    },
    {
        name: "Gojo",
        strenth: 10,
        defense: 10,
        vitality: 7,
        experience_given: 1000,
        gold_dropped: 300,
    },
    {
        name: "Tanjiro",
        strenth: 4,
        defense: 4,
        vitality: 4,
        experience_given: 200,
        gold_dropped: 150,
    },
    {
        name: "Kaneki",
        strenth: 8,
        defense: 6,
        vitality: 9,
        experience_given: 250,
        gold_dropped: 1500,
    },


]
const seedMonsters = () => Monsters.bulkCreate(monstersData);

module.exports = seedMonsters