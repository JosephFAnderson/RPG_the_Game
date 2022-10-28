const creation = () => {
    document.location.replace('/characterCreation');
}

const kill = async (event) => {
    const res = await fetch(`/api/character/${event.target.dataset.id}`, {
        method: 'DELETE'
    });
    res.ok ? document.location.reload() :alert( await res.json());
}

const activate = (event) => {
    let tarEl;
    if(event.target.className.includes('character')){      
        tarEl = event.target;
    }else if(event.target.parentNode.className === 'charStats'){
        tarEl = event.target.parentNode.parentNode;
    }else{
        tarEl = event.target.parentNode;
    }
    
    const current = document.getElementsByClassName('active');
    if(current.length > 0){
        current[0].className = current[0].className.replace(" active", "");
    }
    
    tarEl.className += " active";
}

const charContainer = document.querySelector('#charContainer');
charContainer.addEventListener('click', activate)

const selectEl = document.querySelector('#selectChar');
selectEl.addEventListener('click', () => {
    const current = document.getElementsByClassName('active');
    const char_id = current[0].dataset.id    
    document.location.replace(`/town/${char_id}`);
});

const createBtn = document.querySelector('#createBtn');
createBtn.addEventListener('click', creation);

const leavegame = document.querySelector('#logOut');
leavegame.addEventListener('click', () => {
    document.location.replace('/');
});

const gotograve = document.querySelector('#visitGrav');
gotograve.addEventListener('click', () => {
    document.location.replace('/graveyard');
});