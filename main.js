window,addEventListener('load', main);

/** @type {HTMLElement} */
let imageElement;

const speed = .4;
const position = {
    let: 0,
    left: 0
}
function main() {
    imageElement = document.querySelector('img')
    setInterval(moveBird, 20)
}

function moveBird() {
    position.left += speed;
    imageElement.style.left = position.left + '%'
}