const filterShop = (event, itemType) =>{
    const tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    };

    const tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    };

    document.getElementById(itemType).style.display = "block";
    event.target.className += " active";
}

const returnTown = (event) => {
    document.location.replace(`/town/${event.target.dataset.id}`)
};

const buyItem = async (event) => {    
    if(event.target.tagName === "BUTTON"){
        const price = parseInt(event.target.previousElementSibling.previousElementSibling.dataset.price);
        const curGold = parseInt(document.querySelector('#curGold').dataset.gold);
        const itemId = parseInt(event.target.parentNode.dataset.id);
        const itemType = event.target.parentNode.dataset.type;
        const char_id = document.querySelector('#townBtn').dataset.id;

        if(curGold < price){
            return;
        }

        const newGold = curGold - price;
        let newChar;

        if(itemType === 'weapon'){
            newChar = {
                gold: newGold,
                weapon_id: itemId
            }
        }else{
            newChar = {
                gold: newGold,
                armor_id: itemId
            }
        }

        const res = await fetch(`/api/character/${char_id}`,{
            method: 'PUT',
            body: JSON.stringify(newChar),
            headers: { 'Content-type': 'application/json' }
        })

        if(res.ok){
            document.querySelector('#curGold').textContent = `${newGold}`
            document.querySelector('#curGold').dataset.gold = newGold;
        }
    }
}

const townEl = document.querySelector('#townBtn');
townEl.addEventListener('click', returnTown)

const shopEl = document.querySelector('#shop');
shopEl.addEventListener('click', buyItem)