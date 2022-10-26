const {User} = require('../models');

const userData = [
    {
        username: 'tsunami278',
        email: 'tsun@gmail.com',
        password: 'root1234'
    },
    {
        username: 'shockedPikachu',
        email: 'pleaseno@yahoo.com',
        password: '4321toor'
    },
    {
        username: 'l33tGam3R',
        email: '69420@gmail.com',
        password: 'l33tGam3R'
    }
]

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;