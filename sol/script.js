const grid = document.querySelector('.grid');
let currentCell = { row: 1, col: 1 };

// Create the grid
for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => draw(cell));
    grid.appendChild(cell);
}

// Function to draw on the grid
function draw(cell) {
    cell.classList.add('active');
}

// Function to reset the grid
function reset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('active'));
}