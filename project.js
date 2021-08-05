const buttons = document.querySelectorAll('.buttons');
const partOne = document.querySelector('#partOne');
const partOneContent = document.querySelector('.partOneContent');
const start = document.querySelector('.start');
const ps5Button = document.querySelector('.ps5B');
const featuresButton = document.querySelector('.fB');
const gamesButton = document.querySelector('.gB');
const psplusButton = document.querySelector('.pspB');
const topButton = document.querySelector('.goToTop');
let rootElement = document.documentElement;

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover", function( event ) {
//     buttons[i].classList.remove("buttonsOut");
//     buttons[i].classList.add("buttonsIn");
//   }, false);
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseout", function( event ) {
//     buttons[i].classList.remove("buttonsIn");
//     buttons[i].classList.add("buttonsOut");
//   }, false);
// }

// start.addEventListener("mouseover", function(event){
//   this.classList.remove("buttonsOut");
//   this.classList.add("buttonsIn");
// })
// start.addEventListener("mouseout", function(event){
//   this.classList.remove("buttonsIn");
//   this.classList.add("buttonsOut");
// })

partOne.addEventListener('mousemove', parallax);

function parallax(event) {
  for (let i = 0; i < buttons.length; i++) {
    let speed = buttons[i].getAttribute('data-speed');
    let x = (window.innerWidth - event.pageX * speed) / 100;
    let y = (window.innerWidth - event.pageY * speed) / 100;
    buttons[i].style.transform =
      'translateX(' + x + 'px) translateY(' + y + 'px)';
  }
  let speed = partOneContent.getAttribute('data-speed');
  let x = (window.innerWidth - event.pageX * speed) / 100;
  let y = (window.innerWidth - event.pageY * speed) / 100;
  partOneContent.style.transform =
    'translateX(' + x + 'px) translateY(' + y + 'px)';
  start.style.transform =
    'translateX(' + x / 5 + 'px) translateY(' + y / 5 + 'px)';
}

function scrollTo(event) {
  event.preventDefault();
  let height = this.getAttribute('data-height');
  scroll({
    top: height,
    behavior: 'smooth',
  });
}
start.addEventListener('click', scrollTo);
ps5Button.addEventListener('click', scrollTo);
featuresButton.addEventListener('click', scrollTo);
gamesButton.addEventListener('click', scrollTo);
psplusButton.addEventListener('click', scrollTo);

function handleScroll() {
  // do something on scroll
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.09) {
    // 0.09 is the toggle ratio (selected by trial & error)
    //show button
    topButton.classList.add('showBtn');
  } else {
    //hide button
    topButton.classList.remove('showBtn');
  }
}
topButton.addEventListener('click', scrollTo);
document.addEventListener('scroll', handleScroll);
