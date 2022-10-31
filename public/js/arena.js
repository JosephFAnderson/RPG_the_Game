const activate = (event) => {
    let tarEl;
    if(event.target.className.includes('opponent')){      
        tarEl = event.target;
    }else if(event.target.parentNode.className === 'oppStats'){
        tarEl = event.target.parentNode.parentNode;
    }else{
        tarEl = event.target.parentNode;
    }
    
    const current = document.getElementsByClassName('selected');
    if(current.length > 0){
        current[0].className = current[0].className.replace(" selected", "");
    }
    
    tarEl.className += " selected";
}

const selectEl = document.querySelector('#selectOpp');
selectEl.addEventListener('click', () => {
    const current = document.getElementsByClassName('selected');
    const char_id = document.querySelector('#selectOpp').dataset.id;
    const opp_id = current[0].dataset.id;  
    document.location.replace(`/arenaCombat?id=${char_id}&opp_id=${opp_id}`);
});

const charContainer = document.querySelector('#oppContainer');
charContainer.addEventListener('click', activate)

const returnBtn = document.querySelector('#returnTown');
returnBtn.addEventListener('click', (event) =>{
    document.location.replace(`/town/${event.target.dataset.id}`)
});
