var marbleImages = [
    "./images/marble1.jpg",
    "./images/marble3.jpg"
];

var marbles = document.querySelectorAll(".marble");
var currentImageIndex = 0;

function changeImages() {
    marbles.forEach(function(marble) {
        marble.src = marbleImages[currentImageIndex];
    });

    currentImageIndex = (currentImageIndex + 1) % marbleImages.length;
}

// Initial call
changeImages();

// Set interval to change images every 2 seconds
setInterval(changeImages, 2000);
