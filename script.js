document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#gallery img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
