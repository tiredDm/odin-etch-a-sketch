const container = document.querySelector('.container');
//create the 16 x 16 grid of divs.. make 16 column divs, with 16 divs inside them that have flex direction of vertical..
let size  = 16;// doing this incase we want to change it for later..
for(let i = 0; i < size; i++){
    let div = document.createElement('div');
    for(let j = 0; j < size; j++){
        let divChild = document.createElement('div');
        divChild.classList.add('cell');
        div.appendChild(divChild)
    }
    div.classList.add('col');
    container.appendChild(div);
}