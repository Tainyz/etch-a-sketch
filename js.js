const grid = document.getElementById('grid');

for (let i = 0; i < 4 * 4; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';    
    grid.appendChild(cell);
}
