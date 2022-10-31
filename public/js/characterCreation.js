const upload = async (event) => {
    event.preventDefault();
    const characterImage = document.querySelector('#charImage');
    let uploadImg = document.querySelector('#characterImage').value;
    characterImage.src = uploadImg;
}

const creation = async (event) => {
    event.preventDefault();
    const image_urlEl = document.querySelector('#charImage');
    const nameEl = document.querySelector('#name');
    const strengthEl = document.querySelector('#str');
    const defenseEl = document.querySelector('#def');
    const vitalityEl = document.querySelector('#vit');

    const image_url = image_urlEl.src;
    const name = nameEl.value.trim();
    const strength = strengthEl.value.trim();
    const defense = defenseEl.value.trim();
    const vitality = vitalityEl.value.trim();

    if(name && image_url && strength && defense && vitality){
        const res = await fetch('/api/character', {
            method: 'POST',
            body: JSON.stringify({ name, image_url, strength, defense, vitality}),
            headers: { 'Content-type': 'application/json' }
        });
        res.ok ? document.location.replace('/characterLanding') : console.log(res.json());
    }
}

const minusCountStr = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#str');
    let input = inputs.value;
    if (input > 1) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="Cannot go further.");
    }
}

const addCountStr = () => {
    let points = document.querySelector('#points');
    let point = points.value;
    let input = document.querySelector('#str');
    if(point > 0) {
        input.stepUp();
        points.stepDown();
    } else {
        alert(message="Cannot go further.");
    }
}

const minusCountDef = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#def');
    let input = inputs.value;
    if (input > 1) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="Cannot go further.");
    }
}

const addCountDef = () => {
    let points = document.querySelector('#points');
    let point = points.value;
    let input = document.querySelector('#def');
    if(point > 0) {
        input.stepUp();
        points.stepDown();
    } else {
        alert(message="Cannot go further.");
    }
}

const minusCountVit = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#vit');
    let input = inputs.value;
    if (input > 1) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="Cannot go further.");
    }
}

const addCountVit = () => {
    let points = document.querySelector('#points');
    let point = points.value;
    let input = document.querySelector('#vit');
    if(point > 0) {
        input.stepUp();
        points.stepDown();
    } else {
        alert(message="Cannot go further.");
    }
}

const uploadBtn = document.querySelector('#uploadBtn');
uploadBtn.addEventListener('click', upload);

const createBtn1 = document.querySelector('#createBtn1');
createBtn1.addEventListener('click', creation);