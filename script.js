document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', function() {
        gallery.scrollLeft -= 200; // Adjust the scroll value as needed
    });

    rightArrow.addEventListener('click', function() {
        gallery.scrollLeft += 200; // Adjust the scroll value as needed
    });

    const images = gallery.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
