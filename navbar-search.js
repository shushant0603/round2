document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    function activateSearch() {
        searchInput.focus();
    }

    searchInput.addEventListener("click", activateSearch);
    searchBtn.addEventListener("click", activateSearch);
});
document.addEventListener("DOMContentLoaded", function() {
    const hoverTextElements = document.querySelectorAll(".hover-text");
    hoverTextElements.forEach(function(element) {
        element.setAttribute("data-text", element.textContent);
  });
});


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
