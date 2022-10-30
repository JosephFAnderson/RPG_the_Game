let character;
let opponent;
const initative = [];
const charEl = document.querySelector("#player");
const oppEl = document.querySelector("#monster");
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
    if(character.curHealth > 0 && opponent.curHealth > 0){    
        const cLog = document.querySelector('#combatLog');
        cLog.innerHTML = "";
        for(let i = 0; i < 2; i++){
            if(initative[i].name === character.name){
                const damage = roll(`${character.weapon.damage}+${character.strength}`);
                cLog.innerHTML += `${character.name} attacks ${opponent.name} for ${damage}<br>`;
                let damageTaken = damage - opponent.defense;
                if(damageTaken < 0){
                    damageTaken = 0
                }

                cLog.innerHTML += `${opponent.name} takes ${damageTaken} after armor<br>`;

                opponent.curHealth -= damageTaken;
                reduceMonsterHPBar(getHP(opponent));
                if(opponent.curHealth < 1){
                    victory();
                    break;
                }
        
            } else{
                const damage = roll(`${opponent.weapon.damage}+${opponent.strength}`);
                cLog.innerHTML += `${opponent.name} attacks ${character.name} for ${damage}<br>`;
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
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = ""
    cLog.innerHTML = `CONGRATULATIONS! You defeated ${opponent.name}.<br>`;
    
    setInterval( () => {
        document.location.replace(`/town/${character.id}`)
    }, 4000);  
};

const defeat = async () => {
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = "";
    cLog.innerHTML = `DEFEATED! You have been bested by ${opponent.name}.<br>`;
    
    setInterval( () => {
        document.location.replace(`/town/${charEl.dataset.id}`)
    }, 2000);    
};

const getReady = async () => {
    character = await fetch(`/api/character/${charEl.dataset.id}`).then(res => res.json()).then(data => data);
    character.maxHealth = character.vitality*5;
    character.curHealth = character.vitality*5;
    
    initative.push(character);
    
    opponent = await fetch(`/api/character/${oppEl.dataset.id}`).then(res => res.json()).then(data => data);
    
    opponent.maxHealth = opponent.vitality*4;
    opponent.curHealth = opponent.vitality*4;

    const order = Math.floor(Math.random() * 2);
    order === 1 ? initative.push(opponent) : initative.unshift(opponent);

    playHP.textContent = `${character.curHealth} / ${character.maxHealth}`;
    monHP.textContent = `${opponent.curHealth} / ${opponent.maxHealth}`;
};

const flee = () => {
    fleeBTN.disabled = "disabled";
    const cLog = document.querySelector('#combatLog');
    cLog.innerHTML = "";
    
    const damage = roll(`${opponent.weapon.damage}+${opponent.strength}`);
    cLog.innerHTML += `${opponent.name} attacks ${character.name} for ${damage}<br>`;
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
        setInterval(() => {
            document.location.replace(`/town/${charEl.dataset.id}`);
        }, 2000);
    }
};

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
    
    monHP.textContent = `${opponent.curHealth} / ${opponent.maxHealth}`
};

const getHP = (person) => {
    const curHP = (person.curHealth/person.maxHealth)*100
    return curHP;
};

getReady();

const atkBtn = document.querySelector('#attackBtn');
atkBtn.addEventListener('click', attack);

const fleeBTN = document.querySelector('#fleeBtn');
fleeBTN.addEventListener('click', flee);

