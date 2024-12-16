// footer.js

// Function to load the footer
function loadFooter() {
    fetch('footer.html')  // Fetch the footer HTML file
        .then(response => response.text())
        .then(data => {
            // Select the element where you want to insert the footer
            const footerContainer = document.getElementById('footer-container');
            footerContainer.innerHTML = data;  // Insert the footer HTML content
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load the footer on page load
window.onload = loadFooter;
