const container = document.querySelector('.container');
const resetDiv = document.querySelector('.resetDiv')
const resetButton = document.createElement('button');
resetButton.setAttribute('class', 'resetbutton');
resetButton.textContent = 'Reset game';
resetDiv.appendChild(resetButton);
const resizeDiv = document.querySelector('.resizeDiv')
const resizeButton = document.createElement('button')
resizeButton.setAttribute('class', 'resizeButton');
resizeButton.textContent = 'Resize';
resizeDiv.appendChild(resizeButton);




createGrid = gridNumber => {
    if (gridNumber === undefined) {
        gridNumber = 16;
    } else gridNumber = gridNumber;
    let gridSize = gridNumber * gridNumber;
    for (i = 0; i < gridSize; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(squares);
    }
        const cells = document.querySelectorAll('.squares');
        cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    }));
};


createGrid()



//const cells = document.querySelectorAll('.squares');

function reset() {
    const cells = document.querySelectorAll('.squares');
    for (const cell of cells) {
        cell.style.backgroundColor = 'rgb(195, 193, 193)';
    }
}
resetButton.addEventListener('click', reset);


resizeButton.addEventListener('click', () => {
    value = prompt('What is your preferred grid size?');
    if (value >= 100) {
        alert('Enter a number which is less than 100');
        value = 16;
        reset();
        createGrid(value)
    } else {
    reset();
    createGrid(value);
    }
})