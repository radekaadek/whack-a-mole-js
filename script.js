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

function removeTarget(target) {
    target.setAttribute("src", "grey.png");
    target.removeAttribute('onclick');
}

function setNewTarget(target) {
    target.setAttribute("src", "bunny.png");
    target.setAttribute('onclick', 'clickOnBunny(this)');
}

async function clickOnBunny(){
    counter++;
    textBox.innerHTML = "Bunnies hit: " + counter.toString();
    if (counter == 9) {
        alert("You won!");
    }
    newRandomID = chooseNewID(targetID);
    console.log(newRandomID);
    removeTarget(targetItem);
    await sleep(randomNumber(750, 2000));
    targetItem = items[newRandomID-1]
    setTimeout(setNewTarget(targetItem), randomNumber(1000, 2000));
    targetID = newRandomID;
}

async function play() {
    let counter = 0;
    textBox.innerHTML = "Bunnies hit: " + counter.toString();
    removeTarget(targetItem);
    await sleep(randomNumber(1000, 2000));
    targetItem = items[chooseNewID(targetID)-1]
    setNewTarget(targetItem);
}

let line = document.createElement('div');
textBox = document.body.appendChild(line)
textBox.innerHTML = "Click on the rabbit to start the game!";
textBox.setAttribute("class" ,"textBox")

// create a grid element
const newDiv = document.createElement('div');
let grid = document.body.appendChild(newDiv);
grid.setAttribute("class", "grid");


let items = [];
let item;
let template;

//draw empty squares
for (var i = 1; i < 4; i++) {
    let newBlock = document.createElement('div');
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("blockID", i);
    grid.appendChild(newBlock);
    for (var j = 1; j < 4; j++) {
        template = document.createElement('img');
        template.setAttribute("id", (i*3+j).toString());
        template.setAttribute("class", "targetIMG");
        template.setAttribute("src", "grey.png");
        item = newBlock.appendChild(template);
        items.push(item);
    }
}

let targetID = chooseNewID(-1);
let newRandomID;
let targetItem = items[targetID-1]
setNewTarget(targetItem);

let counter = 0;
targetItem.setAttribute("onclick",
                        "play()");
