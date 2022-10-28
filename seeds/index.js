const sequelize = require('../config/connection.js');
const seedUser = require('./userSeeds');
const seedCharacter = require('./characterSeeds');
const seedWeapon = require('./weaponSeeds');
const seedArmor = require('./armorSeeds');
const seedDeads = require('./deadSeeds');
const seedMonsters = require('./monsterSeeds')

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n---- DATABASE SYNCED ----\n');
    await seedUser();
    console.log('\n---- USERS SEEDED ----\n');
    await seedWeapon();
    console.log('\n---- WEAPONS SEEDED ----\n');
    await seedArmor();
    console.log('\n---- ARMORS SEEDED ----\n');
    await seedCharacter();    
    console.log('\n---- CHARACTERS SEEDED ----\n');  
    await seedMonsters();
    console.log('\n---- MONSTERS SEEDED ----\n');  
    await seedDeads();
    console.log('\n---- DeadS SEEDED ----\n');

    process.exit(0);
}

seedAll();