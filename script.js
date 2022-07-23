// Function to generate random number in a given range
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function chooseNewID(currentID) {
    let randomID = randomNumber(1, 10);
    while (currentID == randomID) {
        randomID = randomNumber(1, 10);
    }
    return randomID;
}

// choose a new hole for the target and return its id
function swapTargets(items, previousID, nextID) {
    let currentElement = items[previousID-1];
    currentElement.setAttribute("src", "grey.png");
    let newElement = items[nextID-1];
    newElement.setAttribute("src", "bunny.png");
}

function play() {
    counter = 0
    for (var j = 0; j < 19; j++) {
        newRandomID = chooseNewID(targetID);
        console.log(newRandomID);
        swapTargets(items, targetID, newRandomID);
        targetID = newRandomID;
    }
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
    template.setAttribute("class", "targetIMG");
    template.setAttribute("src", "grey.png");
    item = grid.appendChild(template);
    items.push(item);
}

let targetID = chooseNewID(-1);
let newRandomID;
swapTargets(items, 1, targetID);

let line = document.createElement('div');
textBox = document.body.appendChild(line)
textBox.innerHTML = "Click on the rabbit to start the game!"
textBox.setAttribute("class" ,"textBox")
play()
