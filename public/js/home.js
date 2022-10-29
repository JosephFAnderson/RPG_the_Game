var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 4000,
    delay: (el, i) => 150 * (i+1)
});

var logWrapper = document.querySelector('.loginText');
logWrapper.innerHTML = logWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.loginText .letter',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 3000,
  delay: (el, i) => 300 * (i+1)
});

var signWrapper = document.querySelector('.signText');
signWrapper.innerHTML = signWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.signText .letter',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 3000,
  delay: (el, i) => 500 * (i+1)
});