document.addEventListener("DOMContentLoaded", function () {

    const openPopupButtons = document.querySelectorAll(".open-popup");

    const popups = document.querySelectorAll(".popup");
 
    openPopupButtons.forEach((button) => {
      button.addEventListener("click", function () {

        const popup = button.closest(".services-container").querySelector(".popup");
        if (popup) {
          popup.style.display = "block";
        }
      });
    });
  
    popups.forEach((popup) => {
      const closeButton = popup.querySelector(".close-btn");
      if (closeButton) {
        closeButton.addEventListener("click", function () {
          popup.style.display = "none";
        });
      }
  
      const overlay = popup.querySelector(".overlay");
      if (overlay) {
        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) {
            popup.style.display = "none";
          }
        });
      }
    });
  });
  