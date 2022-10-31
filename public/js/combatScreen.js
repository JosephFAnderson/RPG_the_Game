let character;
let monster;
const initative = [];
const charEl = document.querySelector("#player");
const monEl = document.querySelector("#monster");
const cLog = document.querySelector('#combatLog');
const monHP = document.querySelector('#monHpVal');
const playHP = document.querySelector('#playerHpVal');

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
    if(character.curHealth > 0 && monster.curHealth > 0){    
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

                monster.curHealth -= damageTaken;
                reduceMonsterHPBar(getHP(monster));
                if(monster.curHealth < 1){
                    victory();
                    break;
                }
        
            } else{
                const damage = monster.strength;
                cLog.innerHTML += `${monster.name} attacks ${character.name} for ${damage}<br>`;
                let damageTaken = damage - character.armor.defense;
                if(damageTaken < 0){
                    damageTaken = 0
                }

                cLog.innerHTML += `${character.name} takes ${damageTaken} after armor<br>`;
                character.curHealth -= damageTaken;
                reducePlayerHPBar(getHP(character));
                if(character.curHealth < 1){
                    defeat();
                    break;
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
    cLog.innerHTML = `CONGRATULATIONS! You defeated ${monster.name}.<br>You gained ${monster.gold_dropped} gold and ${monster.experience_given}xp.<br>You now have ${character.gold} gold and ${character.experience} xp!<br>`;

    if(character.experience > character.level*30){        
        character.experience -= (character.level*30);
        character.level++;        
        character.strength++;
        character.defense++;
        character.vitality++;
        cLog.innerHTML += `You leveled up!<br>You are now Lv. ${character.level}`
    }

    const res = await fetch(`/api/character/${character.id}`, {
        method: 'PUT',
        body: JSON.stringify(character),
        headers: { 'Content-type': 'application/json' }
    });

    if(res.ok){
        setInterval( () => {
        document.location.replace(`/town/${character.id}`)
        }, 4000);
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
    character.maxHealth = character.vitality*5;
    character.curHealth = character.vitality*5;
    
    initative.push(character);
    
    monster = await fetch(`/api/monster/${monEl.dataset.id}`).then(res => res.json()).then(data => data);
    
    monster.maxHealth = monster.vitality*4;
    monster.curHealth = monster.vitality*4;

    const order = Math.floor(Math.random() * 2);
    order === 1 ? initative.push(monster) : initative.unshift(monster);

    playHP.textContent = `${character.curHealth} / ${character.maxHealth}`;
    monHP.textContent = `${monster.curHealth} / ${monster.maxHealth}`;
}

const flee = () => {
    fleeBTN.disabled = "disabled";
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = "";
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

const reducePlayerHPBar = (value) => {
    anime({
        targets: '#playerHPBar',
        width: `${value}%`,
        easing: 'easeInOutQuad',
        direction: 'left'
    })
    
    playHP.textContent = `${character.curHealth} / ${character.maxHealth}`
};

const reduceMonsterHPBar = (value) => {
    anime({
        targets: '#monsterHPBar',
        width: `${value}%`,
        easing: 'easeInOutQuad',
        direction: 'left'
    })
    
    monHP.textContent = `${monster.curHealth} / ${monster.maxHealth}`
}

const getHP = (person) => {
    const curHP = (person.curHealth/person.maxHealth)*100
    return curHP;
}

getReady();

const atkBtn = document.querySelector('#attackBtn');
atkBtn.addEventListener('click', attack);

const fleeBTN = document.querySelector('#fleeBtn');
fleeBTN.addEventListener('click', flee);
