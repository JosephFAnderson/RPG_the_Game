const gotochars = document.querySelector('#rtnCharBtn');
gotochars.addEventListener('click', () => {
    document.location.replace('/characterlanding');
});

var path = anime.path('#leafPath path');

anime({
  targets: '#leaf',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 14500,
  loop: true,
});

anime({
  targets: '#leaf2',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  loop: true,
});

anime({
  targets: '#leaf3',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 13500,
  loop: true,
});