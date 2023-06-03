// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                check();
            } else {
                let operand = this.getAttribute("data-type");
                choice(operand);
            }
        });
    }
});

let goals = 0;
let missedGoals = 0;





/**create functions structure */
function choice(operand) {

    if (operand === "leftkick") {
        display("output", operand);



    } else if (operand === "rightkick") {
        display("output", operand);


    } else {
        alert(`Unknown game type: ${operand}`);
        throw `Unknown game type: ${operand}. Aborting!`;
    }

}


function display(operand1, operand2) {
    document.getElementById(operand1).textContent = operand2;

}


function goalKeeper() {
    let randomnumbers = Math.floor(Math.random() * 10) + 1;
    if (randomnumbers % 2 == 0) {
        let jump = "right";
        display("outputtwo", jump);
    } else {
        let jump = "left";
        display("outputtwo", jump);
    }
    updateScores();
}


function check() {
    let check = document.getElementById("output").innerText;
    if (check === "RIGHTKICK" || check === "LEFTKICK") {
        goalKeeper();
    } else {
        alert(`KICK!`);
    }


}

function updateScores() {

    let choice = document.getElementById("output").innerText;
    let goalKeeper = document.getElementById("outputtwo").innerText;

    if (choice === "LEFTKICK" && goalKeeper === "RIGHT") {
        document.getElementById('score').textContent = ++goals;

    } else if (choice === "RIGHTKICK" && goalKeeper === "LEFT") {
        document.getElementById('score').textContent = ++goals;

    } else {
        document.getElementById('no-score').textContent = ++missedGoals;
    }

}













