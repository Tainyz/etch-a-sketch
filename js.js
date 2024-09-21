const grid = document.querySelector('.grid');
let currentCell = { row: 1, col: 1 };
let colorIndex = 0; // To keep track of the current color index

// Define a rainbow color array
const colors = [
    '#ffadad', // Red
    '#ffd6a5', // Orange
    '#fdffb6', // Yellow
    '#caffbf', // Green
    '#9bf6ff', // Blue
    '#a0c4ff', // Indigo
    '#bdb2ff'  // Violet
];

// Create the grid
for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.colored = 'false'; // To track if the cell has been colored
    cell.addEventListener('mouseover', () => draw(cell));
    grid.appendChild(cell);
}

// Function to draw on the grid
function draw(cell) {
    if (cell.dataset.colored === 'false') { // Only change color if not colored
        cell.style.backgroundColor = colors[colorIndex];
        cell.dataset.colored = 'true'; // Mark cell as colored
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    }
}

// Function to reset the grid
function reset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.dataset.colored = 'false'; // Reset colored state
    });
    colorIndex = 0; // Reset color index
}