// Clicking either "SHOOT" button represents a shot 
// for that team. Shots should havbe a random chance 
// of succeeding or failing. ( Sounds like I)
// The number of shots taken should increase for
// every click of the "SHOOT" I the number of goals 
// should only increase when the shot is successful.
// Clicking the "RESET"button should reset all the 
// shot and goals counters

// Team 1
const teamOneShot = document.querySelector("#teamone-numshots")
const teamOneButton = document.querySelector("#teamone-shoot-button")
const teamOneGoals = document.querySelector("#teamone-numgoals")
teamOneButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamOneShotTaken = Number(teamOneShot.innerHTML) + 1;
    teamOneShot.innerHTML = teamOneShotTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
        let teamOneGoalsMade = Number(teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = teamOneGoalsMade
    }
})


// Team 2
const teamTwoShot = document.querySelector("#teamtwo-numshots")
const teamTwoButton = document.querySelector("#teamtwo-shoot-button")
const teamTwoGoals = document.querySelector("#teamtwo-numgoals")
teamTwoButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamTwoShotTaken = Number(teamTwoShot.innerHTML) + 1;
    teamTwoShot.innerHTML = teamTwoShotTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
        let teamTwoGoalsMade = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = teamTwoGoalsMade
    }
})

const resetButton = document.querySelector("#reset-button")
const numResets = document.querySelector("#num-resets")
resetButton.addEventListener("click", function () {
    console.log("+ resetButton clicked");
    teamOneShot.innerHTML = 0
    teamTwoShot.innerHTML = 0
    let numberResets = Number(numResets.innerHTML) + 1;
    console.log(numberResets)
    numResets.innerHTML = numberResets
    teamOneGoals.innerHTML = 0
    teamTwoGoals.innerHTML = 0

})