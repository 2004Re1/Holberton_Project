document.addEventListener("DOMContentLoaded", main);

var ssPreview;
var closeBtn;

function main() {
    ssPreview = document.getElementById("big1");
    closeBtn = document.getElementById("button1");
}


function changeImage(image) {
    var bigImage = document.querySelector(".big-image");
    bigImage.src = image.src;
    bigImage.parentElement.style.display = "block";

    ssPreview.style.display = "block";
    closeBtn.style.display = "block";
}



function runGame() {
    let iFrame = document.createElement('iframe');

    // Set attributes for the iframe
    iFrame.setAttribute('frameborder', '0');
    iFrame.setAttribute('src', 'https://itch.io/embed-upload/6509125?color=333333');
    iFrame.setAttribute('allowfullscreen', '');
    iFrame.setAttribute('width', '640');
    iFrame.setAttribute('height', '380');
    iFrame.setAttribute('id', 'gameFrame');

    let gameContainer = document.getElementById("game-container");
    gameContainer.parentElement.appendChild(iFrame);
    gameContainer.remove();
    iFrame.focus();

    window.location.href = "#gameFrame";
}


function toggleSSPreview() {

    ssPreview.style.display = "none";
    closeBtn.style.display = "none";

}
