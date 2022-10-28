let character;
let monster;
let order;



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
            console.log(`rolled a ${roll}`);
            sum += roll;
        }
        return sum + mod;
    }catch (err){
    }   
}

const getReady = async () => {
    const charEl = document.querySelector("#player");
    const monEl = document.querySelector("#monster");

    const charData = await fetch(`/api/character/${charEl.dataset.id}`).then(res => res.json()).then(data => data);
    character = {
        strength: charData.strength,
        defense: charData.defense + charData.armor.defense,
        vitality: charData.vitality,
        weapon_damage: charData.weapon.damage,
        experience: charData.experience,
        gold: charData.gold
    }
    
    const monData = await fetch(`/api/monster/${monEl.dataset.id}`).then(res => res.json()).then(data => data)
    monster = {
        strength: monData.strength,
        defense: monData.defense,
        vitality: monData.vitality,
        exp_worth: monData.experience_given,
        gold_drop: monData.gold_dropped
    }

    order = [Math.floor(Math.random() * 2)]
    order[0] === 1 ? order.push(0) : order.push(1);
}

getReady();
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