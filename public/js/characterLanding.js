const selectEl = document.querySelector('#selectChar');
selectEl.addEventListener('click', () => {
    document.location.replace('/town/1');
});

const gotograve = document.querySelector('#visitGrav');
gotograve.addEventListener('click', () => {
    document.location.replace('/graveyard');
});

const leavegame = document.querySelector('#logOut');
leavegame.addEventListener('click', () => {
    document.location.replace('/');
});
