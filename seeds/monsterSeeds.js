const { Monster } = require('../models');

const monstersData = [
    {
        name: "Toge",
        strength: 6,
        defense: 6,
        vitality: 4,
        experience_given: 500,
        gold_dropped: 100,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'
    },
    {
        name: "Gojo",
        strength: 10,
        defense: 10,
        vitality: 7,
        experience_given: 1000,
        gold_dropped: 300,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'

    },
    {
        name: "Tanjiro",
        strength: 4,
        defense: 4,
        vitality: 4,
        experience_given: 200,
        gold_dropped: 150,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'

    },
    {
        name: "Kaneki",
        strength: 8,
        defense: 6,
        vitality: 9,
        experience_given: 250,
        gold_dropped: 1500,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'
    },


]
const seedMonsters = () => Monster.bulkCreate(monstersData);

module.exports = seedMonsters