document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });

    function openModal(src, alt) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${src}" alt="${alt}">
                <p>${alt}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal on close button click
        modal.querySelector('.close').addEventListener('click', function() {
            document.body.removeChild(modal);
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
