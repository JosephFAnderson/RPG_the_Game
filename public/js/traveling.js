let path = anime.path('.motionPath path');

anime({
    targets: '.travelingPath .characterPiece',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 7000
});

let path2 = anime.path('.motionPath2 path');

anime({
    targets: '.travelingPath2 .characterPiece2',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'linear',
    duration: 7000
});

const transitionToCombat = async () => {
    const combatData = document.querySelector('#combatData');
    console.log(combatData.dataset.id);
    console.log(combatData.dataset.monid);
    setTimeout(function(){ document.location.replace(`/combatScreen?id=${combatData.dataset.id}&monId=${combatData.dataset.monid}`); }, 8500);
};

window.addEventListener('load', transitionToCombat)