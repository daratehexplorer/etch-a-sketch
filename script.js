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

/* Default grid */
for (i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    content.appendChild(square);
};

/* Generate new grid */
newGridBtn.addEventListener('click', () => {
    let userInput = prompt('How many squares do you want each side of your grid to have?'); 
    
    if (userInput <= 100) {
        content.innerHTML = '';

        let root = document.documentElement;
            root.style.setProperty('--userInput-width', ((100/userInput) + "%"));
            root.style.setProperty('--userInput-height', ((100/userInput) + "%"));

        let gridSize = Math.pow(userInput, 2);
        for (i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            content.appendChild(square);
        };
    } else {
        alert('Please try again with a smaller number, as any grid larger than 100x100 may cause a crash.');
    }
});

