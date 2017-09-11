var popup = document.querySelector(".button-popup-search");
var popupform = document.querySelector(".popup-form");
var dateIn = popupform.querySelector("[name=date-in]");
var dateOut = popupform.querySelector("[name=date-out]");
var amountAdult = popupform.querySelector("[name=adults]");
var amountChild = popupform.querySelector("[name=children]");
var btnSubmit = document.querySelector(".popup-search-btn");

popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupform.classList.toggle("popup-form-hidden");
  popupform.classList.remove("popup-return");
});

popupform.addEventListener("submit", function(evt){
  if (!dateIn.value || !dateOut.value || !amountAdult.value){
    evt.preventDefault();
    popupform.classList.remove("popup-return");
    popupform.offsetWidth = popupform.offsetWidth;
    console.log("Введите данные");
    popupform.classList.add("popup-return");
  }
});