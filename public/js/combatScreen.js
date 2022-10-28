let character;
let monster;
const initative = [];

const roll = (input) => {
    try{
        let mod = 0;
        let dicePair = input;

        if(input.includes('+')){
            mod += parseInt(input.split('+')[1]);
            dicePair = input.split('+')[0];
        }   
    
        const dice = dicePair.split('d');
        let sum = 0;
        for(let i = 1; i <= dice[0]; i++){
            const roll = Math.floor(Math.random()*dice[1])+1
            sum += roll;
        }
        return sum + mod;
    }catch (err){
    }   
}

const attack = () => {
    for(let i = 0; i < 2; i++){
        if(initative[i].name === character.name){
            const damage = roll(`${character.weapon_damage}+${character.strength}`);
            console.log(`${character.name} attacks ${monster.name} for ${damage}`);
            let damageTaken = damage - monster.defense;
            if(damageTaken < 0){
                damageTaken = 0
            }

            console.log(`${monster.name} takes ${damageTaken} after armor`);

            monster.health -= damageTaken;
            if(monster.health < 1){
                console.log(`${monster.name} has fallen\n`)
            }else{
                console.log(`${monster.name} has ${monster.health} health left\n`)
            }
       
        } else{
            const damage = monster.strength;
            console.log(`${monster.name} attacks ${character.name} for ${damage}`);
            let damageTaken = damage - character.defense;
            if(damageTaken < 0){
                damageTaken = 0
            }

            console.log(`${character.name} takes ${damageTaken} after armor`);
            character.health -= damageTaken;
            if(character.health < 1){
                console.log(`${character.name} has fallen\n`)
            }else{
                console.log(`${character.name} has ${character.health} health left\n`)
            }
            
        }
    }
};

const getReady = async () => {
    const charEl = document.querySelector("#player");
    const monEl = document.querySelector("#monster");

    const charData = await fetch(`/api/character/${charEl.dataset.id}`).then(res => res.json()).then(data => data);
    character = {
        name: charData.name,
        strength: charData.strength,
        defense: charData.defense + charData.armor.defense,
        vitality: charData.vitality,
        weapon_damage: charData.weapon.damage,
        experience: charData.experience,
        gold: charData.gold,
        health: charData.vitality*4
    }

    initative.push(character);
    
    const monData = await fetch(`/api/monster/${monEl.dataset.id}`).then(res => res.json()).then(data => data)
    monster = {
        name: monData.name,
        strength: monData.strength,
        defense: monData.defense,
        vitality: monData.vitality,
        exp_worth: monData.experience_given,
        gold_drop: monData.gold_dropped,
        health: monData.vitality*4
    }

    const order = Math.floor(Math.random() * 2)
    order === 1 ? initative.push(monster) : initative.unshift(monster);

    console.log(character);
    console.log(monster);
    console.log(initative);
}

getReady();

const atkBtn = document.querySelector('#attackBtn');
atkBtn.addEventListener('click', attack)
// const atkBtn = document.querySelector('#attackBtn');
// const fleeBtn= document.querySelector('#fleeBtn');
// const monster = require('../Monster');
// const character = require('../Character')


// function flee(){
//     document.location.replace('/town');
// }
// fleeBtn.addEventListener('click',flee());
// function attack(){


// }