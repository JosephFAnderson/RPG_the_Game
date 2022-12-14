const characterMenu = async () => {
    document.location.replace(`/characterLanding`)
}

const logout = async () => {
    document.location.replace(`/`)
}

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
    document.body.classList.toggle("open");
    
    if (document.body.classList == "open") {
        anime.timeline({loop: false})
        .add({
            targets: '.anime',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 500
        });
    } else{
        anime.timeline({loop: false})
        .add({
            targets: '.anime',
            opacity: [1,0],
            easing: "easeInOutQuad",
            duration: 300,
        });
    }
}

const characterMenuBtn = document.querySelector('#characterMenuBtn');
characterMenuBtn.addEventListener('click', characterMenu);

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', logout);

const arenaBtn = document.querySelector('#arenaBtn');
arenaBtn.addEventListener('click', arena);

const shopBtn = document.querySelector('#shopBtn');
shopBtn.addEventListener('click', shop);

const adventureBtn = document.querySelector('#adventureBtn');
adventureBtn.addEventListener('click', adventure);

const inventoryBtn = document.querySelector('#inventoryBtn');
inventoryBtn.addEventListener('click', inventory);

const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', inventory);