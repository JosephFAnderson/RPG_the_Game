const arena = async () => {
    document.location.replace(`/arena/${arenaBtn.dataset.id}`)
}

const shop = async () => {
    document.location.replace(`/shop/${shopBtn.dataset.id}`)
}

const adventure = async () => {
    document.location.replace(`/adventure/${adventureBtn.dataset.id}`)
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