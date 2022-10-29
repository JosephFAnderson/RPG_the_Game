let character;
let monster;
const initative = [];
const charEl = document.querySelector("#player");
const monEl = document.querySelector("#monster");
const cLog = document.querySelector('#combatLog');

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
    if(character.health > 0 && monster.health > 0){    
        const cLog = document.querySelector('#combatLog');
        cLog.innerHTML = "";
        for(let i = 0; i < 2; i++){
            if(initative[i].name === character.name){
                const damage = roll(`${character.weapon.damage}+${character.strength}`);
                cLog.innerHTML += `${character.name} attacks ${monster.name} for ${damage}<br>`;
                let damageTaken = damage - monster.defense;
                if(damageTaken < 0){
                    damageTaken = 0
                }

                cLog.innerHTML += `${monster.name} takes ${damageTaken} after armor<br>`;

                monster.health -= damageTaken;
                if(monster.health < 1){
                    victory();
                    break;
                }else{
                    cLog.innerHTML += `${monster.name} has ${monster.health} health left<br>`
                    
                }
        
            } else{
                const damage = monster.strength;
                cLog.innerHTML += `${monster.name} attacks ${character.name} for ${damage}<br>`;
                let damageTaken = damage - character.armor.defense;
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
    }
};

const victory = async () => {
    character.gold += monster.gold_dropped;
    character.experience += monster.experience_given;
    character.battles_won++;

    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = ""
    cLog.innerHTML = `CONGRATULATIONS! You defeated ${monster.name}.<br>You gained ${monster.gold_drop} gold and ${monster.exp_worth}xp.<br>You now have ${character.gold} gold and ${character.experience} xp!<br>`;

    const res = await fetch(`/api/character/${character.id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            gold: character.gold, 
            experience: character.experience,
            battles_won: character.battles_won
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if(res.ok){
        setInterval( () => {
        document.location.replace(`/town/${character.id}`)
        }, 3000);
    }else{
        console.log(res.statusText);
    }    
}

const defeat = async () => {
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = "";
    cLog.innerHTML = `DEFEATED! You have been slain by ${monster.name}.<br>`;
    cLog.innerHTML += `${character.name} has been added to the graveyard.`;
    const res = await fetch('/api/dead', {
        method: 'POST',
        body: JSON.stringify({ 
            name: character.name,
            level: character.level,
            battles_won: character.battles_won,
            image_url: character.image_url,
            monster_id: monster.id,
            user_id: character.user_id
         }),
        headers: { 'Content-type': ' application/json' }
    });

    if(res.ok){
        const response = await fetch(`/api/character/${character.id}`, {
            method: 'DELETE'
        });

        if(response.ok){
            setInterval( () => {
                document.location.replace('/characterLanding')
            }, 2000)
        }
    }

    
}

const getReady = async () => {
    character = await fetch(`/api/character/${charEl.dataset.id}`).then(res => res.json()).then(data => data);
    character.health = character.vitality*5;
    
    
    initative.push(character);
    
    monster = await fetch(`/api/monster/${monEl.dataset.id}`).then(res => res.json()).then(data => data)
    
    monster.health = monster.vitality*4

    const order = Math.floor(Math.random() * 2)
    order === 1 ? initative.push(monster) : initative.unshift(monster);
}

const flee = () => {
    fleeBTN.disabled = "disabled";
    const damage = monster.strength;
    cLog.innerHTML += `${monster.name} attacks ${character.name} for ${damage}<br>`;
    let damageTaken = damage - character.armor.defense;
    if(damageTaken < 0){
        damageTaken = 0;
    }

    cLog.innerHTML += `${character.name} takes ${damageTaken} after armor<br>`;
    character.health -= damageTaken;
    if(character.health < 1){
        defeat();
        return;
    }else{
        cLog.innerHTML += `${character.name} has ${character.health} health left<br>`
        setInterval(() => {
            document.location.replace(`/town/${charEl.dataset.id}`);
        }, 2000);
    }
}

getReady();

const atkBtn = document.querySelector('#attackBtn');
atkBtn.addEventListener('click', attack);

const fleeBTN = document.querySelector('#fleeBtn');
fleeBTN.addEventListener('click', flee);
