const gotochars = document.querySelector('#return');
gotochars.addEventListener('click', () => {
    document.location.replace('/characterlanding');
});

var path = anime.path('#leafPath path');

anime({
  targets: '#leaf, #leaf2, #leaf3',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  loop: true,
});