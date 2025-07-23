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

// Add this to your existing script.js

// Project hover effects
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
        project.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
    });
});

// Smooth scrolling for project links
document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});
