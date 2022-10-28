const returnBtn = (event) => {
    document.location.replace(`/town/${event.target.dataset.id}`)
};

const returnEl = document.querySelector('#return');
returnEl.addEventListener('click', returnBtn)