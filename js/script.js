var popup = document.querySelector(".button-popup-search")
          popupform = document.querySelector(".popup-form");

  popup.addEventListener("click", function() {
        popupform.classList.toggle("popup-form-active");
});

  searchButton.addEventListener('click', function (evt) {
      document.getElementsByTagName("form")[0].classList.add("form-show");
        document.getElementsByTagName("form")[0].style.visibility = "visible";
});
