const arena = async () => {
    document.location.replace('/arena')
}

const shop = async () => {
    document.location.replace('/shop')
}

const adventure = async () => {
    document.location.replace('/adventure')
}

const inventory = async () => {
    document.location.replace('/characterCreation')
}

const arenaBtn = document.querySelector('#arenaBtn');
arenaBtn.addEventListener('click', arena);

const shopBtn = document.querySelector('#shopBtn');
shopBtn.addEventListener('click', shop);

const adventureBtn = document.querySelector('#adventureBtn');
adventureBtn.addEventListener('click', adventure);

const inventoryBtn = document.querySelector('#inventoryBtn');
inventoryBtn.addEventListener('click', inventory);