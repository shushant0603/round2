// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true,
// });


document.addEventListener("DOMContentLoaded", function() {
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", function() {
      searchContainer.classList.toggle("active");
      searchInput.focus();
  });
});
