var elInner = document.querySelector(".header__inner");
var elBtn = document.querySelector(".header__hamburg-btn");

elBtn.addEventListener("click", function(){
  elInner.classList.toggle("header__inner--active");
  elBtn.classList.toggle("header__hamburg-btn--active");

})