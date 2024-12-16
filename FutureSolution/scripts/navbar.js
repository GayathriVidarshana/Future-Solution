document.addEventListener("DOMContentLoaded", function () {
    fetch('navBar.html')  // Adjust path if necessary
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navigation bar');
            }
            return response.text();
        })
        .then(data => {
            // Insert the navigation bar into the target element
            document.getElementById('navbar').innerHTML = data;

            // Attach the event listener for the hamburger menu after navbar is loaded
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');

            if (hamburger && nav) {
                hamburger.addEventListener('click', () => {
                    nav.classList.toggle('active');
                });
            } else {
                console.error('Hamburger menu or nav element not found.');
            }
        })
        .catch(error => {
            console.error('Error loading navigation bar:', error);
        });
});
