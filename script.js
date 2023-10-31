const body = document.querySelector("body");
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
    


for (i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

