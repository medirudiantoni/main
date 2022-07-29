// INTRO

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-span');

window.addEventListener('DOMContentLoaded', () => {

  setTimeout( () => {

    logoSpan.forEach((span, id) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (id + 1) * 100 )
    })

    setTimeout( () => {
      logoSpan.forEach( (span, id) => {

        setTimeout( () => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (id + 1) * 50 )

      } )
    }, 2000 )

    setTimeout(() => {
      intro.style.top = '-100vh'
    }, 2300);

  } )

})

// INTRO END


const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('nav .navMenu');
const darkMode = document.querySelector('.darkMode');
const body = document.querySelector('body');
const main = document.querySelector('main');
const overlayBlocker = document.querySelector('.overlay-blocker');
let bgChg = document.querySelector('.bgChg');

const Slider = () => {
  navMenu.classList.toggle('navSlide');
  navToggle.classList.toggle('toggleX');
  body.classList.toggle('body-scroll-disable');
  main.classList.toggle('nav-main');
  overlayBlocker.classList.toggle('overlay-blocker-active')
};

navToggle.addEventListener("click", Slider)
navMenu.addEventListener("click", Slider);
overlayBlocker.addEventListener("click", Slider);

const bgSwitch = () => {
    bgChg.classList.toggle('bgChgDark');
    darkMode.classList.toggle('darkMode-is-active')
    if (darkMode.classList.contains('darkMode-is-active')) {
      setTimeout(function() {
      darkMode.innerHTML = "Light mode"
      }, 100);
    } else {
      darkMode.innerHTML = "Dark mode"
    }
};
darkMode.addEventListener("click", bgSwitch);



// jquery scroll parallax

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  var contactScroll = wScroll - 2770;
  if(contactScroll < 0){
    contactScroll = 0;
    return false;
  }

  const contactWrapper = $('.contact-wrapper');

  contactWrapper.css({
    'transform' : `translateY(${contactScroll/2}px)`
  })

});