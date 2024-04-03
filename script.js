const slides = [
    { image: "images/USA.jpg", title: "USA", description: "The land of the free and the home of the brave." },
    { image: "images/australia.jpg", title: "Australia", description: "Experience the unparalleled natural beauty." },
    { image: "images/canada.jpg", title: "Canada", description: "Discover a country brimming with cultural diversity and natural wonders." },
    { image: "images/finland.jpg", title: "Finland", description: "The land of a thousand lakes and endless forests." },
    { image: "images/france.jpg", title: "France", description: "Home to world-renowned cuisine, art, and the Eiffel Tower." },
    { image: "images/germany.jpg", title: "Germany", description: "A country known for its rich history, culture, and engineering prowess." },
    { image: "images/japan.jpg", title: "Japan", description: "A harmonious blend of tradition and cutting-edge technology." },
    { image: "images/norway.jpg", title: "Norway", description: "The land of the midnight sun, with breathtaking fjords and landscapes." },
    { image: "images/sweden.jpg", title: "Sweden", description: "A place of remarkable beauty, innovation, and cultural heritage." }
];

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function () {
    updateSlideInfo();
});

function updateSlideInfo() {
    const info = slides[currentSlide];
    const slideInfo = document.getElementById("slide-info");
    slideInfo.innerHTML = `<img src="${info.image}" alt="${info.title}"><h2>${info.title}</h2><p>${info.description}</p>`;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlideInfo();
}
