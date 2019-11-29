const CONTAINER = document.querySelector(".container");
const BLACK = document.querySelector(".black");
const CLEAR = document.querySelector(".clear");
const RESIZE = document.querySelector(".resize");
const RUBBER = document.querySelector(".rubber");
const RANDOM = document.querySelector(".random-color")


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
    let input = Number(prompt("How big would you like the grid? MAX 100!"));
    createGrid(input);
    paintCell();
};

function eraseCells() {
    const CELL = document.querySelectorAll('.grid');
    CELL.forEach( (cl) => {
        cl.addEventListener('mouseover', (e) => {
            if(e.buttons === 1 || e.buttons === 3){
                let rubber = 255;
                cl.style.backgroundColor = `rgba(${rubber},${rubber},${rubber})`;
            };
        });
        cl.addEventListener('mouseenter', (e) => {
            let rubber = 255;
            cl.style.backgroundColor = `rgba(${rubber},${rubber},${rubber})`;
        })
    });
};

function paintCellColor() {
    const CELL = document.querySelectorAll('.grid');
    CELL.forEach( (cl) => {
        cl.addEventListener('mouseover', (e) => {
            if(e.buttons === 1 || e.buttons === 3){
                let hex1 = Math.floor(Math.random() * 256);
                let hex2 = Math.floor(Math.random() * 256);
                let hex3 = Math.floor(Math.random() * 256);
                cl.style.backgroundColor = `rgba(${hex1},${hex2},${hex3})`;
            };
        });
        cl.addEventListener('mouseenter', (e) => {
            let hex1 = Math.floor(Math.random() * 256);
            let hex2 = Math.floor(Math.random() * 256);
            let hex3 = Math.floor(Math.random() * 256);
            cl.style.backgroundColor = `rgba(${hex1},${hex2},${hex3})`;
        })
    });
};

BLACK.addEventListener('click', paintCell);
CLEAR.addEventListener('click', clearCell);
RESIZE.addEventListener('click', resizeGrid);
RUBBER.addEventListener('click', eraseCells);
RANDOM.addEventListener('click', paintCellColor);


createGrid(16);
// paintCell();