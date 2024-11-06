// Get the button
window.onload = function() {
    window.scrollTo(0, 0);
};
const backToTopButton = document.getElementById('backToTop');

// Function to display the "Back to Top" button when scrolled to bottom
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show button after 100px scroll
    } else {
        backToTopButton.style.display = 'none'; // Hide button when scrolled up
    }
};

// Scroll to top when button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
};
