window,addEventListener('load', main);

/** @type {HTMLElement} */
let imageElement;

const speed ={
    x:  .4,
    y: .2,
}

const size = 40;
const position = {
    let: 0,
    top: 0
}
function main() {
    imageElement = document.querySelector('img')
    imageElement.style.width = size + '%';
    setInterval(moveBird, 20)
}

function moveBird() {
    position.top +=  speed.x;
    if (position.top > 100) {
        position.top = -size;
    }
    imageElement.style.left = position.top + '%';


    position.top +=  speed.y;
    if (position.top > 100) {
        position.top = -size;
    }
    imageElement.style.top = position.top + '%';
}