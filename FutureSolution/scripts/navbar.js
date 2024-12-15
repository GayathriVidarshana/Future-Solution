document.addEventListener("DOMContentLoaded", function () {
    fetch('../view/navBar.html')  // Adjust path if necessary
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navigation bar');
            }
            return response.text();
        })
        .then(data => {
            console.log('Navbar content loaded:', data);  // Log the fetched content
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navigation bar:', error);
        });
});
