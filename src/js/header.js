document.getElementById("sort-select") .addEventListener("change", function () {
    let selectedOption = this.value;
    let ourTeamSection = document.getElementById("our-team")
    let pickScientistSection = document.getElementById("info__section")
    let cheackBornAgeSection = document.getElementById("leap-year__section")
    let calculatorOfTimeSection = document.getElementById("time-calculator__section")
    let calculatorSection = document.getElementById("calculator__section")
    let guessTheNumberSection = document.getElementById("guess-the-number-section")
    let threeNumbersSection = document.getElementById("highest-number__section")
    let dinoGameSection = document.getElementById("dino-game");
    let soccerGameSection = document.getElementById("soccer")
    let paperRockGameSection = document.getElementById("prs__section")
    switch(selectedOption) {
        case "interactive":
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        case "number":
            soccerGameSection.classList.add("display-none");
            dinoGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none")
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
        case "games":
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            break;
        case "means":
            dinoGameSection.classList.add("display-none");
            soccerGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none");
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        default:
            break;
    }
});

let header = document.getElementById('header');
let headerLogo = document.querySelector(".header__logo")
let leapYearSection = document.getElementById("leap-year__section")
let guessTheNumberSection = document.getElementById("guess-the-number-section")
let prsSection = document.getElementById("prs__section")
let calculatorSection = document.getElementById("calculator__section")
let timeCalculatorSection = document.getElementById("time-calculator__section")
let dinoGame = document.getElementById("dino-game")
let soccer = document.getElementById("soccer")
let highestNumberSection = document.getElementById("highest-number__section")
let ourTeam = document.getElementById("our-team")
let infoSection = document.getElementById("info__section")
let footer = document.querySelector(".footer")
document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
    if (this.classList.contains('night')) {
        header.style.backgroundColor = '#333';
        leapYearSection.style.backgroundColor = '#333';
        guessTheNumberSection.style.backgroundColor = '#333';
        prsSection.style.backgroundColor = '#333';
        calculatorSection.style.backgroundColor = '#333';
        timeCalculatorSection.style.backgroundColor = '#333';
        dinoGame.style.backgroundColor = '#333';
        soccer.style.backgroundColor = '#333';
        highestNumberSection.style.backgroundColor = '#333';
        ourTeam.style.backgroundColor = '#333';
        infoSection.style.backgroundColor = '#fff';
        footer.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#fff';
        leapYearSection.style.backgroundColor = '#fff';
        guessTheNumberSection.style.backgroundColor = '#fff';
        prsSection.style.backgroundColor = '#fff';
        calculatorSection.style.backgroundColor = '#fff';
        timeCalculatorSection.style.backgroundColor = '#fff';
        dinoGame.style.backgroundColor = '#fff';
        soccer.style.backgroundColor = '#fff';
        highestNumberSection.style.backgroundColor = '#fff';
        ourTeam.style.backgroundColor = '#fff';
        infoSection.style.backgroundColor = '#fff';
        footer.style.backgroundColor = '#fff';

    }
});