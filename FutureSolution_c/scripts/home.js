// JavaScript to handle slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides by default
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Call the function to start the slideshow
showSlides();
