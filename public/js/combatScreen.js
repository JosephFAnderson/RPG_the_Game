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
    
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = "";
    for(let i = 0; i < 2; i++){
        if(initative[i].name === character.name){
            const damage = roll(`${character.weapon_damage}+${character.strength}`);
            cLog.innerHTML += `${character.name} attacks ${monster.name} for ${damage}<br>`;
            let damageTaken = damage - monster.defense;
            if(damageTaken < 0){
                damageTaken = 0
            }

            cLog.innerHTML += `${monster.name} takes ${damageTaken} after armor<br>`;

            monster.health -= damageTaken;
            if(monster.health < 1){
                victory();
                return;
            }else{
                cLog.innerHTML += `${monster.name} has ${monster.health} health left<br>`
                
            }
       
        } else{
            const damage = monster.strength;
            cLog.innerHTML += `${monster.name} attacks ${character.name} for ${damage}<br>`;
            let damageTaken = damage - character.defense;
            if(damageTaken < 0){
                damageTaken = 0
            }

            cLog.innerHTML += `${character.name} takes ${damageTaken} after armor<br>`;
            character.health -= damageTaken;
            if(character.health < 1){
                defeat();
                return;
            }else{
                cLog.innerHTML += `${character.name} has ${character.health} health left<br>`
                
            }
            
        }
    }
};

const victory = () => {
    character.gold += monster.gold_drop;
    character.experience += monster.exp_worth;
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = ""
    cLog.innerHTML = `CONGRATULATIONS! You defeated ${monster.name}.<br>You gained ${monster.gold_drop} gold and ${monster.exp_worth}xp.<br>You now have ${character.gold} gold and ${character.experience} xp!<br>`
}

const defeat = () => {
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = ""
    cLog.innerHTML = `DEFEATED! You have been slain by ${monster.name}.<br>`
}

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
}

const flee = () => {
    const damage = monster.strength;
    cLog.innerHTML += `${monster.name} attacks ${character.name} for ${damage}<br>`;
    let damageTaken = damage - character.defense;
    if(damageTaken < 0){
        damageTaken = 0
    }

    cLog.innerHTML += `${character.name} takes ${damageTaken} after armor<br>`;
    character.health -= damageTaken;
    if(character.health < 1){
        defeat();
        return;
    }else{
                cLog.innerHTML += `${character.name} has ${character.health} health left<br>`
                
            }
}

getReady();

const atkBtn = document.querySelector('#attackBtn');
atkBtn.addEventListener('click', attack)

const fleeBtn = document.querySelector('#flee');
fleeBtn.addEventListener('click', flee);
