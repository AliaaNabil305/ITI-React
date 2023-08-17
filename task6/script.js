/*function openwin() {
    var win = open("", "", "width=300,height=300");
    var message = "hello";
    var index = 0;

    var interval = setInterval(function() {
        if (index < message.length) {
            win.document.write(message.charAt(index));
            index++;
        } else {
            clearInterval(interval);
            setTimeout(function() {
                win.close();
            }, 2000);
        }
    }, 100); 
}
*/

var currentIndex = 0;  
var slideshowInterval; 

function next() {
    currentIndex++;  
    if (currentIndex >= 4) {
        currentIndex = 0; 
    }

    updateImages();
}

function previous() {
    currentIndex--;  
    if (currentIndex < 0) {
        currentIndex = 3;  
    }

    updateImages();
}

function updateImages() {
    for (var i = 0; i < 5; i++) {
        document.images[i].src = `./images/${currentIndex + i + 2}.jpg`;
    }
}

function slideshow() {
    slideshowInterval = setInterval(next, 1000); 
}

function stop() {
    clearInterval(slideshowInterval);
}

next();  





