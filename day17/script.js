
function openImage(image) {
    let lightbox = document.getElementById("lightbox");
    let largeImage = document.getElementById("largeImage");

    largeImage.src = image.src;
    lightbox.style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
