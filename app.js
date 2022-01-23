let btn = document.querySelector('.BtnContainer');
let colorCode = document.querySelector('.colorcode');
let body = document.querySelector('#body');

let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function randomNum() {
    return Math.floor(Math.random() * 16);
}


function hexGenerator() {
    let hexColor = ''
    for (let i = 0; i < 6; i++) {
        hexColor += numArray[randomNum()];

    }

    colorCode.textContent = `#${hexColor}`;
    body.style.backgroundColor = `#${hexColor}`;


}
btn.addEventListener('click', hexGenerator);