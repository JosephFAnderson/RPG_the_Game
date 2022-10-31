const returnBtn = (event) => {
    document.location.replace(`/town/${event.target.dataset.id}`)
};
const firstBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const secondBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const thirdBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const forthBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const fifthBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const firstEl = document.querySelector('#first');
firstEl.addEventListener('click', firstBtn)

const secondEl = document.querySelector('#second');
secondEl.addEventListener('click', secondBtn)

const thirdEl = document.querySelector('#third');
thirdEl.addEventListener('click', thirdBtn)

const forthEl = document.querySelector('#forth');
forthEl.addEventListener('click', forthBtn)

const fifthEl = document.querySelector('#fifth');
fifthEl.addEventListener('click', fifthBtn)

const returnEl = document.querySelector('#returnBtn');
returnEl.addEventListener('click', returnBtn)