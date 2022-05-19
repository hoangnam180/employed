import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
let menu = ['01', '02', '03']
let swiper = new Swiper('.swiper-container.two', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    //change text for each slide
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: "2" ,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    autoplay: {
      delay: 2000,
    },
});
