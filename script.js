const body = document.querySelector("body");

const header = document.createElement('div');
header.classList.add('header')
    const title = document.createElement('div');
    title.classList.add('title')
    title.textContent = 'ETCH-A-SKETCH';
        header.appendChild(title);
    const textBox = document.createElement('div');
    textBox.classList.add('textBox')
        header.appendChild(textBox);
body.appendChild(header);

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const content = document.createElement('div')
content.classList.add('content');
container.appendChild(content);

for (i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    content.appendChild(square);
};

