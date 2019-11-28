const CONTAINER = document.querySelector(".container");
const BLACK = document.querySelector(".black");
const CLEAR = document.querySelector(".clear");
const RESIZE = document.querySelector(".resize");


function createGrid(x) {
    CONTAINER.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    CONTAINER.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (let row = 0; row < x; row++) {
        for (let col = 0; col < x; col++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.style.backgroundColor = 'white';
            div.style.border = 'none';
            div.style.outline = '1px solid #000';
            CONTAINER.appendChild(div);
        };
    };
};

function paintCell() {
    const CELL = document.querySelectorAll('.grid');
    CELL.forEach( (cl) => {
        cl.addEventListener('mouseover', (e) => {
            if(e.buttons === 1 || e.buttons === 3){
                cl.style.backgroundColor = "black";
            };
        });
        cl.addEventListener('mouseenter', (e) => {
            cl.style.backgroundColor = 'black';
        })
    });
};

function clearCell() {
    const CELL = document.querySelectorAll('.grid');
    CELL.forEach((cl) => {
        cl.style.backgroundColor = "white";
    })
};

function resizeGrid() {
    const CELL = document.querySelectorAll('.grid');
    CELL.forEach((cl) => {
        cl.remove();
    })
    let input = prompt("How big would you like the grid? MAX 100!");
    if (input > 100) {
        alert("Err!!! Max 100!!!");
    };
    createGrid(input);
    paintCell();
};



BLACK.addEventListener('click', (e) => {
    paintCell();
});
CLEAR.addEventListener('click', (e) => {
    clearCell();
});
RESIZE.addEventListener('click', (e) => {
    resizeGrid();
});


createGrid(16);
paintCell();