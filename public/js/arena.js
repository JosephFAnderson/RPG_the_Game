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

const returnBtn = document.querySelector('#returnTown');
returnBtn.addEventListener('click', (event) =>{
    document.location.replace(`/town/${event.target.dataset.id}`)
});
