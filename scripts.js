// Add interactivity when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Example: Clicking the image reveals an alert
    const images = document.querySelectorAll(".image-section img");
    
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("You clicked an image of Hib-aton, Clark James!");
        });
    });
});
