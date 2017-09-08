var popup = document.querySelector(".button-popup-search");
var popupform = document.querySelector(".popup-form");

popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupform.classList.toggle("popup-form-active");
});
