var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-scrollbar',
    hide: true,

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})