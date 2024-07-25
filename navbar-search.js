

  var swiper = new Swiper('.mySwiper', {
    loop: true, // Loop through slides
    autoplay: {
        delay: 5000, // Time between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
