window,addEventListener('load', main);

/** @type {HTMLElement} */
let imageElement;

const speed = .4;
const size = 40;
const position = {
    let: 0,
    left: 0
}
function main() {
    imageElement = document.querySelector('img')
    imageElement.style.width = size + '%';
    setInterval(moveBird, 20)
}

function moveBird() {
    position.left +=  speed;
    if (position.left > 100) {
        position.left = -40;
    }
    imageElement.style.left = position.left + '%';
}