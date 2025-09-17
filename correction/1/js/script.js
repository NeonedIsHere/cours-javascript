const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
const tabColor = document.querySelectorAll('.color');
const maxImgHair = 3;

function indexHair() {
    const hair = document.querySelector('#hair');
    const nbrPng = hair.src.split('-')[2].split('.')[0]; //1er split = ['hair','black','1.png'] ; 2nd split = ['1','png']
    const indexPng = parseInt(nbrPng); //'1' -> 1 (de string on transforme en integer)
    return indexPng;
}

function colorHair() {
    const hair = document.querySelector('#hair');
    const colorHair = hair.src.split('-')[1];
    return colorHair;
}

function srcHair(hair, color, index) {
    hair.src = "asset/img/hair-" + color + "-" + index + ".png";
}

arrowLeft.addEventListener("click", () => {
    let index = indexHair() - 1;
    const hair = document.querySelector('#hair');
    const color = colorHair();

    if (index == 1) {
        srcHair(hair, color, index);
        arrowLeft.classList.toggle("opacity50");
        arrowLeft.classList.toggle("clickable");
    } else if (index > 1) {
        srcHair(hair, color, index);
    }

    if (index == maxImgHair - 1) {
        srcHair(hair, color, index);
        arrowRight.classList.toggle("opacity50");
        arrowRight.classList.toggle("clickable");
    }
})

arrowRight.addEventListener("click", () => {
    let index = indexHair() + 1;
    const hair = document.querySelector('#hair');
    const color = colorHair();

    if (index == maxImgHair) {
        srcHair(hair, color, index);
        arrowRight.classList.toggle("opacity50");
        arrowRight.classList.toggle("clickable");
    } else if (index < maxImgHair) {
        srcHair(hair, color, index);
    }

    if (index == 2) {
        srcHair(hair, color, index);
        arrowLeft.classList.toggle("opacity50");
        arrowLeft.classList.toggle("clickable");
    }
})

tabColor.forEach(color => {
    color.addEventListener("click", event => {
        const color = event.target.id;
        const index = indexHair();
        const hair = document.querySelector('#hair');

        srcHair(hair, color, index);
    })
})