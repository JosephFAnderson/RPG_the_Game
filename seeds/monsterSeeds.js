const { Monster } = require('../models');

const monstersData = [
    {
        name: "Toge",
        strength: 6,
        defense: 6,
        vitality: 4,
        level: 2,
        damage: '1d6',
        experience_given: 500,
        gold_dropped: 100,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'
    },
    {
        name: "Gojo",
        strength: 10,
        defense: 10,
        vitality: 7,
        level: 10,
        experience_given: 100,
        damage: '2d6',
        gold_dropped: 300,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'

    },
    {
        name: "Tanjiro",
        strength: 4,
        defense: 4,
        vitality: 4,
        level: 1,
        damage: '1d4',
        experience_given: 10,
        gold_dropped: 150,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'

    },
    {
        name: "Kaneki",
        strength: 8,
        defense: 6,
        vitality: 9,
        level: 9,
        damage: '1d10',
        experience_given: 90,
        gold_dropped: 1500,
        monster_url: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png'
    },
    {
        name: 'Goblin',
        strength: 2,
        defense: 4,
        vitality: 4,
        level: 3,
        damage: '1d12',
        experience_given: 30,
        gold_dropped: 100,
        monster_url: 'https://whfb.lexicanum.com/mediawiki/images/c/c6/Goblin_TGP.jpg'
    },
    {
        name: 'Sahuagin',
        strength: 4,
        defense: 3,
        vitality: 5,
        level: 4,
        damage: '2d4',
        experience_given: 40,
        gold_dropped: 150,
        monster_url: 'https://www.dndbeyond.com/avatars/thumbnails/0/177/1000/1000/636252761683746719.jpeg'
    },
    {
        name: 'Hill Giant',
        strength: 8,
        defense: 0,
        vitality: 7,
        level: 5,
        damage: '1d6',
        experience_given: 50,
        gold_dropped: 200,
        monster_url: 'https://www.epicpath.org/images/0/06/Hill_Giant_Chieftain_5.png'
    },
    {
        name: 'Rock Elemental',
        strength: 4,
        defense: 6,
        vitality: 6,
        level: 6,
        damage: '2d6',
        experience_given: 60,
        gold_dropped: 200,
        monster_url: 'https://www.aidedd.org/dnd/images/galeb-duhr.jpg'
    },
    {
        name: 'Shambling Mound',
        strength: 5,
        defense: 4,
        vitality: 7,
        level: 7,
        damage: '2d4',
        experience_given: 70,
        gold_dropped: 200,
        monster_url: 'https://www.dndbeyond.com/avatars/thumbnails/16/563/1000/1000/636376346968079714.jpeg'
    },
    {
        name: 'Water Weird',
        strength: 0,
        defense: 0,
        vitality: 8,
        level: 8,
        damage: '3d6',
        experience_given: 80,
        gold_dropped: 200,
        monster_url: 'https://www.aidedd.org/dnd/images/water-weird.jpg'
    }


]
const seedMonsters = () => Monster.bulkCreate(monstersData);

module.exports = seedMonsters