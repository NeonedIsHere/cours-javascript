const hairStyle = [
    "hair-black-1.png",
    "hair-black-2.png",
    "hair-black-3.png"
];

const hairColor = {
    black: 'hair-black-',
    blond: 'hair-blond-',
    cyan: 'hair-turquoise-'
};

let currentStyle = 1;
let currentColor = 'black';

const hairImg = document.querySelector('.hair');
const leftArrow = document.querySelector('img[alt="left"]');
const rightArrow = document.querySelector('img[alt="right"]');
const btnBlack = document.querySelector('.btn_black');
const btnYellow = document.querySelector('.btn_yellow');
const btnCyan = document.querySelector('.btn_cyan');

function updateHair () {
    hairImg.src = `./asset/img/${hairColor[currentColor]}${currentStyle}.png`;

    if (currentStyle === 1) {
        leftArrow.classList.add('disabled');
        leftArrow.style.opacity = 0.5;
        leftArrow.style.pointerEvents = "none";
    } else {
        leftArrow.classList.remove('disabled');
        leftArrow.style.opacity = 1;
        leftArrow.style.pointerEvents = "auto";
    }

    if (currentStyle === 3) {
        rightArrow.classList.add('disabled');
        rightArrow.style.opacity = 0.5;
        rightArrow.style.pointerEvents = "none";
    } else {
        rightArrow.classList.remove('disabled');
        rightArrow.style.opacity = 1;
        rightArrow.style.pointerEvents = "auto";
    }
}

leftArrow.addEventListener('click', () => {
    if (currentStyle > 1) {
        currentStyle--;
        updateHair();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentStyle < 3) {
        currentStyle++;
        updateHair();
    }
});

btnBlack.addEventListener('click', () => {
    currentColor = "black";
    updateHair();
});

btnYellow.addEventListener('click', () => {
    currentColor = "blond";
    updateHair();
});

btnCyan.addEventListener('click', () => {
    currentColor = 'cyan';
    updateHair();
});

updateHair();