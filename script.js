const clrbtn = document.getElementById('clearbtn');
const erasebtn = document.getElementById('erasebtn');
const grid = document.getElementById('grid');

for (let i = 0; i < 16; i++) {
    let column = document.createElement('div');
    column.style.display = "flex";
    column.style.flexDirection = "column";
    column.style.flexGrow = 1; // Set flex-grow to 1 for the flex container

    for (let j = 0; j < 16; j++) {
        let rowBlocks = document.createElement('div');
        rowBlocks.style.backgroundColor = 'white';
        rowBlocks.style.flex = 1;
        rowBlocks.style.border = "0.1px solid grey";
        column.appendChild(rowBlocks);
    }
    grid.appendChild(column);
}
