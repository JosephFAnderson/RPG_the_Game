let path = anime.path('.motionPath path');

anime({
    targets: '.travelingPath .characterPiece',
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    duration: 4500
});

let path2 = anime.path('.motionPath2 path');

anime({
    targets: '.travelingPath2 .characterPiece2',
    translateX: path2('x'),
    translateY: path2('y'),
    easing: 'linear',
    duration: 4500
});

let path3 = anime.path('.motionPath3 path');

anime({
    targets: '.travelingPath3 .characterPiece3',
    translateX: path3('x'),
    translateY: path3('y'),
    easing: 'linear',
    duration: 4500
});

let path4 = anime.path('.motionPath4 path');

anime({
    targets: '.travelingPath4 .characterPiece4',
    translateX: path4('x'),
    translateY: path4('y'),
    easing: 'linear',
    duration: 4500
});

let path0 = anime.path('.motionPath path0');

anime({
    targets: '.travelingPath0 .characterPiece0',
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    duration: 4500
});

const transitionToCombat = async () => {
    const combatData = document.querySelector('#combatData');
    setTimeout(function(){ document.location.replace(`/combatScreen?id=${combatData.dataset.id}&monId=${combatData.dataset.monid}`); }, 7000);
};

window.addEventListener('load', transitionToCombat);