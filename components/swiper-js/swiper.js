export default function swiper() { 
  let swiper = new Swiper(".mySwiper", {
    effect: "cube",
    // slidesPerView: 2,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.95,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}