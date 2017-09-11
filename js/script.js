var popup = document.querySelector(".button-popup-search");
var popupform = document.querySelector(".popup-form");
var dateIn = popupform.querySelector("[name=date-in]");
var dateOut = popupform.querySelector("[name=date-out]");
var amountAdult = popupform.querySelector("[name=adults]");

popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupform.classList.toggle("popup-form-hidden");
});

popupform.addEventListener("submit", function(evt){
  if (!dateIn.value || !dateOut.value || !amountAdult.value){
    evt.preventDefault();
    popupform.classList.add("popup-return");
    console.log("Введите данные");
  }
});