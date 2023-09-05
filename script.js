const container = document.querySelector('.container');
//create the 16 x 16 grid of divs.. make 16 column divs, with 16 divs inside them that have flex direction of vertical..
let size  = 16;// doing this incase we want to change it for later.. // 1 -> 100
for(let i = 0; i < size; i++){
    let div = document.createElement('div');
    for(let j = 0; j < size; j++){
        let divChild = document.createElement('div');
        divChild.classList.add('cell');
        divChild.addEventListener('mouseover', () => {
            divChild.style.backgroundColor = "black";
        });
        div.appendChild(divChild)
    }
    div.classList.add('col');
    container.appendChild(div);
}

// Pixel density button...
const densityButton = document.querySelector('.density-button');
densityButton.addEventListener('click', () => {
    let input;
    let pd = prompt('Please Enter a Pixel Density:', '64');
    if(pd == null || pd == '' || !Number(pd)){
        input = "User did not complete request correctly..";
    } else {
        input = pd;
        changePixelDensity(input);
    }
    
});

function changePixelDensity(pixelDensity){
    console.log(pixelDensity)
}
