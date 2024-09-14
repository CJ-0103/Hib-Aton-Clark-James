document.addEventListener("DOMContentLoaded", function() {
    // Select all list items inside the hobbies section
    const hobbyItems = document.querySelectorAll(".hobbies ul li");

    // Add click event to each hobby
    hobbyItems.forEach(item => {
        item.addEventListener("click", function() {
            alert(`You clicked on: ${this.innerText}`);
        });
    });
});
