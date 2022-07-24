const NO_ROWS = 3;
const NO_COLLUMNS = 3;
const NO_ROUNDS = 10;
const numberOfSquares = NO_COLLUMNS*NO_ROWS;
let startTime;

// Function to generate random number in a given range
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function chooseNewID(currentID) {
    let randomID = randomNumber(1, numberOfSquares);
    while (currentID == randomID) {
        randomID = randomNumber(1, numberOfSquares);
    }
    return randomID;
}

function removeTarget(target) {
    target.setAttribute("src", "images/grey.png");
    target.removeAttribute('onmousedown');
}

function setNewTarget(target) {
    target.setAttribute("src", "images/bunny.png");
    target.setAttribute('onmousedown', 'clickOnBunny(this)');
}

async function clickOnBunny(){
    counter++;
    textBox.innerHTML = "Bunnies hit: " + counter.toString();
    if (counter == NO_ROUNDS) {
        let endTime = new Date().getTime();
        alert("You won! your time was: " + 
            ((endTime-startTime-waitTime)/1000).toString() + " seconds");
    }
    removeTarget(targetItem);
    sleepTime = randomNumber(750, 2000);
    await sleep(sleepTime);
    waitTime += sleepTime;
    newRandomID = chooseNewID(targetID);
    targetItem = items[newRandomID-1];
    setNewTarget(targetItem);
    targetID = newRandomID;
    if (counter == NO_ROUNDS) {
        counter = 0;
        play();
    }
}

async function play() {
    let counter = 0;
    textBox.innerHTML = "Bunnies hit: " + counter.toString();
    removeTarget(targetItem);
    sleepTime = randomNumber(1000, 2000);
    await sleep(sleepTime);
    waitTime = sleepTime;
    startTime = new Date().getTime();
    targetItem = items[chooseNewID(targetID)-1];
    setNewTarget(targetItem);
}

let line = document.createElement('div');
textBox = document.body.appendChild(line);
textBox.innerHTML = "Click on the rabbit to start the game!";
textBox.setAttribute("class" ,"textBox");

// create a grid element
const newDiv = document.createElement('div');
let grid = document.body.appendChild(newDiv);
grid.setAttribute("class", "grid");


let items = [];
let item;
let template;

//draw empty squares
for (var i = 1; i < (NO_ROWS+1); i++) {
    let newBlock = document.createElement('div');
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("blockID", i);
    grid.appendChild(newBlock);
    for (var j = 1; j < (NO_COLLUMNS+1); j++) {
        template = document.createElement('img');
        template.setAttribute("id", (i*3+j).toString());
        template.setAttribute("class", "targetIMG");
        template.setAttribute("src", "images/grey.png");
        item = newBlock.appendChild(template);
        items.push(item);
    }
}


let targetID = chooseNewID(-1);
let newRandomID;
let targetItem = items[targetID-1];
setNewTarget(targetItem);

let waitTime = 0;
let counter = 0;
targetItem.setAttribute("onmousedown",
                        "play()");
