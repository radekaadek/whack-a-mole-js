// Function to generate random number in a given range
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function chooseNewID() {
    let randomID = randomNumber(1, 10);
    while (currentID == randomID) {
        randomID = randomNumber(1, 10);
    }
    return randomID;
}

// choose a new hole for the target and return its id
function swapTargets(items, currentID, targetID) {
    let currentElement = items[currentID]
    currentElement.setAttribute("src", "grey.png")
    let newElement = items[targetID-1]
    newElement.setAttribute("src", "bunny.png");
}

// create a grid element
const newDiv = document.createElement('div');
let grid = document.body.appendChild(newDiv);
grid.setAttribute("class", "grid");


let items = [];
let item;
let template;

//draw empty squares
for (var i = 1; i < 10; i++) {
    template = document.createElement('img');
    template.setAttribute("id", i.toString());
    template.setAttribute("class", "targetIMG")
    template.setAttribute("src", "grey.png")
    item = grid.appendChild(template);
    items.push(item);
}

swapTargets(items, 1, chooseNewID())

for (var j = 0; j < 20; j++) {
    
}