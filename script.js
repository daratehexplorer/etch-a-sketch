/* Create of divs */
const body = document.querySelector("body");

const header = document.createElement('div');
header.classList.add('header')
    const title = document.createElement('div');
    title.classList.add('title')
    title.textContent = 'ETCH-A-SKETCH';
    header.appendChild(title);
        
    const instruction = document.createElement('div');
    instruction.classList.add('instruction')
    instruction.textContent = 'Click below to generate a new grid.';
    header.appendChild(instruction);
    
    const newGridBtn = document.createElement('button');
    newGridBtn.textContent = 'GENERATE';
    header.appendChild(newGridBtn);
body.appendChild(header);

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const content = document.createElement('div')
content.classList.add('content');
container.appendChild(content);

/* Generate new grid */
let userInput = '';
newGridBtn.addEventListener('click', () => {
    userInput = prompt('How many squares do you want each side of your grid to have?'); 
    let gridSize = Math.pow(userInput, 2);
    for (i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        content.appendChild(square);
    };
});


