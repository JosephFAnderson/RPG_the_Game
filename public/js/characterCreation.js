const upload = async (event) => {
    event.preventDefault();
    const characterImage = document.querySelector('#charImage');
    let uploadImg = document.querySelector('#characterImage').value;
    characterImage.src = uploadImg;
}

const creation = async (event) => {
    event.preventDefault();


}

const minusCountStr = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#str');
    let input = inputs.value;
    if (input > 0) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="stop");
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
        alert(message="stop");
    }
}

const minusCountDef = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#def');
    let input = inputs.value;
    if (input > 0) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="stop");
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
        alert(message="stop");
    }
}

const minusCountVit = () => {
    let points = document.querySelector('#points');
    let inputs = document.querySelector('#vit');
    let input = inputs.value;
    if (input > 0) {
        inputs.stepDown();
        points.stepUp();
    } else {
        alert(message="stop");
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
        alert(message="stop");
    }
}

const uploadBtn = document.querySelector('#uploadBtn');
uploadBtn.addEventListener('click', upload);

const createBtn = document.querySelector('#createBtn');
createBtn.addEventListener('click', creation);