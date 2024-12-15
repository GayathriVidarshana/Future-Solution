// Get the popup and buttons
const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("open-popup");
const closePopupBtn = document.querySelector(".close-btn");

// Function to show the popup
openPopupBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // Show the popup with flex to center-align it
});

// Function to close the popup
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the popup
});

// Optional: Close the popup when clicking outside the content area
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none"; // Close the popup
    }
});
