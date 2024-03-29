
let paintColor = 'black';
const clrbtn = document.getElementById('clearbtn');
const erasebtn = document.getElementsByClassName('erasebtn');
const grid = document.getElementById('grid');
const sizeChanger = document.getElementById('sizen')
function erase(){
    const gridItems = document.querySelectorAll('.column .rowBlocks');
    gridItems.forEach(rowBlocks =>{
        rowBlocks.style.backgroundColor = 'white';
    })

}

function paint(){
    const gridItems = document.querySelectorAll('.column .rowBlocks');
    gridItems.forEach(rowBlocks => {
        rowBlocks.addEventListener('mouseenter', () => {
            rowBlocks.style.backgroundColor = paintColor;
        })
    })
}


function eraser(){
    const gridItems = document.querySelectorAll('.column .rowBlocks');
    
    gridItems.forEach(rowBlocks => {
        rowBlocks.addEventListener('mouseenter', function(){
            if(rowBlocks.style.backgroundColor === 'black'){
                rowBlocks.style.backgroundColor = 'white';
            }
        })
    })
}




   

    function createCanvas(size){
        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            column.classList.add('column');
            column.style.display = "flex";
            column.style.flexDirection = "column";
            column.style.flex = 1; // Set flex-grow to 1 for the flex container

            for (let j = 0; j < size; j++) {
                let rowBlocks = document.createElement('div');
                rowBlocks.classList.add('rowBlocks')
                rowBlocks.style.backgroundColor = 'white';
                rowBlocks.style.flex = 1;
                rowBlocks.style.border = "0.01px solid black";
                


                //adding hover effect means when mouse hovered over the rowblocks their color is changed to black
                rowBlocks.addEventListener('mouseenter', function(){
                    rowBlocks.style.backgroundColor = paintColor;
                })

                

                column.appendChild(rowBlocks);

            }
            grid.appendChild(column);
        }
    }

    createCanvas(16)


    function gridSize() {
        let size;

        do{
        size = parseInt(prompt("Enter the row you want: "));
        if(!isNaN(size) && size > 0 && size <= 64){
        grid.innerHTML = '';
            
            createCanvas(size);
        }else {
                // Prompt again until a valid input is provided
                alert('Enter a valid positive number between 1 and 64 (inclusive).');
            }
    } while(isNaN(size) || (size<=0 && size > 65) ){
    
    }     
        
    }



