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
    duration: 8000
});

let path4 = anime.path('.motionPath4 path');

anime({
    targets: '.travelingPath4 .characterPiece4',
    translateX: path4('x'),
    translateY: path4('y'),
    easing: 'linear',
    duration: 8000
});

let path5 = anime.path('.motionPath5 path');

anime({
    targets: '.travelingPath5 .characterPiece5',
    translateX: path5('x'),
    translateY: path5('y'),
    easing: 'linear',
    duration: 8000
});

let path6 = anime.path('.motionPath6 path');

anime({
    targets: '.travelingPath6 .characterPiece6',
    translateX: path6('x'),
    translateY: path6('y'),
    easing: 'linear',
    duration: 1500,
    loop: true
});

let path7 = anime.path('.motionPath7 path');

anime({
    targets: '.travelingPath7 .characterPiece7',
    translateX: path7('x'),
    translateY: path7('y'),
    easing: 'linear',
    duration: 4000,
    loop: true
});

const transitionToCombat = async () => {
    const combatData = document.querySelector('#combatData');
    setTimeout(function(){ document.location.replace(`/combatScreen?id=${combatData.dataset.id}&monId=${combatData.dataset.monid}`); }, 7000);
};

window.addEventListener('load', transitionToCombat);