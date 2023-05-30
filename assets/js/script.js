// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let operand = this.getAttribute("data-type");
                choice(operand);
            }
        });
    }
});


let kickersChoice;
let computerChoice;
let goals;
let missedGoals;


/**create functions structure */
function choice(operand) {
    if (operand === "leftkick") {
        displayChoice(operand);
        kickersChoice = "left";
        console.log(kickersChoice);
    } else if (operand === "rightkick") {
        displayChoice(operand);
        kickersChoice = "right";
        console.log(kickersChoice);
    } else {
        alert(`Unknown game type: ${operand}`);
        throw `Unknown game type: ${operand}. Aborting!`;
    }

}


function displayChoice(operand) {
    document.getElementById("output").textContent = operand;
}


