const sequelize = require('../config/connection.js');
const seedUser = require('./userSeeds');
const seedCharacter = require('./characterSeeds');
const seedWeapon = require('./weaponSeeds');


const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n---- DATABASE SYNCED ----\n');
    await seedUser();
    console.log('\n---- USER SEEDED ----\n');
    await seedCharacter();
    console.log('\n---- CHARACTER SEEDED ----\n');
    await seedWeapon();
    console.log('\n---- WEAPON SEEDED ----\n');

    process.exit(0);
}

seedAll();