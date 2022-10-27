const creation = async () => {
    document.location.replace('/characterCreation');
}

const createBtn = document.querySelector('#createBtn');
createBtn.addEventListener('click', creation)

const selectEl = document.querySelector('#selectChar');
selectEl.addEventListener('click', () => {
    document.location.replace('/town/1');
});

const gotograve = document.querySelector('#visitGrav');
gotograve.addEventListener('click', () => {
    document.location.replace('/graveyard');
});

const kill = async (event) => {
    const res = await fetch(`/api/character/${event.target.dataset.id}`, {
        method: 'DELETE'
    });
    res.ok ? document.location.reload() :alert( await res.json());
}
const leavegame = document.querySelector('#logOut');
leavegame.addEventListener('click', () => {
    document.location.replace('/');
});


