const container = document.querySelector('.container');
//create the 16 x 16 grid of divs.. make 16 column divs, with 16 divs inside them that have flex direction of vertical..
// doing this incase we want to change it for later.. // 1 -> 100
createGrid(16);
let Colour = 'black';
let randomMode = false;
let opacityMode = false;

// Pixel density button...
const densityButton = document.querySelector('.density-button');
densityButton.addEventListener('click', () => {
    let input;
    let pd = prompt('Please Enter a Pixel Density:', '64');
    if(pd == null || pd == '' || !Number(pd) || Number(pd) < 1 || Number(pd) > 100){
        input = "User did not complete request correctly..";
    } else {
        input = pd;
        changePixelDensity(input);
    }
    
});

//Random Color button...
const randomColorButton = document.querySelector('.randomize');
randomColorButton.addEventListener('click', () => {
    if(randomMode) {
        randomMode = false;
        Colour = 'black';
    } else {
        randomMode = true;
    }
});

const opacityButton = document.querySelector('.opacity');
opacityButton.addEventListener('click', () => {
    if(opacityMode) {
        opacityMode = false;
    } else {
        opacityMode = true;
    }
});

function changePixelDensity(pixelDensity){
    console.log(pixelDensity)
    //Destroy all divs within "container.." & create the whole thing again..
    removeGrid();
    createGrid(pixelDensity);
}

function createGrid(size){
    for(let i = 0; i < size; i++){
        let div = document.createElement('div');
        for(let j = 0; j < size; j++){
            let divChild = document.createElement('div');
            divChild.classList.add('cell');
            divChild.addEventListener('mouseover', () => {
                if(randomMode){randomColour();}
                else if (opacityMode) {opacityColour(divChild);}
                divChild.style.backgroundColor = Colour;
            });
            div.appendChild(divChild)
        }
        div.classList.add('col');
        container.appendChild(div);
    }
}

function removeGrid(){
    let size = container.childElementCount;
    for(let i = 0; i < size; i++){
        container.removeChild(container.firstChild);
    }
}

function randomColour(){
    Colour = '#' + Math.floor(Math.random()*16777215).toString(16); //found this online but i'm pretty sure it's just a number in hex
    //console.log(Colour);
}

function opacityColour(divChild){
    //console.log(divChild.style.opacity);
    if(divChild.style.opacity == ''){
        divChild.style.opacity = .1;
    } else {
        divChild.style.opacity =  (Number(divChild.style.opacity) + .1);
        
    }
        //Colour = 'rgba(0,0,0,' + .2 + ')';
}
