var dice = 0;
var numRolls = 0;
let mean = 0;
let median = 0;
let mode = 0;
let totalSum = 0;
let arrOfRolls = [];
let ones = 0;
let twos = 0;
let form = document.getElementById('questions');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    numRolls = form.elements['rolls'].value;
    dice = form.elements['dicenum'].value;
})
let roll = document.getElementById("roll1");
roll.addEventListener("click", rollDice)

// function rollDice(){
//     sumOfRoll=Math.trunc((Math.random()*6 + 1));
//     console.log("sumOfRoll = " + sumOfRoll);
// };
// roll1.addEventListener("click", rollDice());
function rollDice(){
    for (let i = 0; i < numRolls; i++) {
        for (let i = 0; i < dice; i++) {
            let num = Math.floor(((Math.random()*6)+1))
            arrOfRolls.push(num);
            totalSum += num;
        }
      }
      console.log(totalSum);
      findMean();
      findMedian();
      console.log(arrOfRolls);
};
function findMean(){
    mean = totalSum/numRolls;
    document.getElementById("meanval").innerHTML = mean;
}
function findMedian(){
    arrOfRolls.sort()
    median = arrOfRolls[arrOfRolls.length/2];
    document.getElementById("medval").innerHTML = median;
}
function findMode(){
    mode = 3;
    document.getElementById("modeval").innerHTML = mode;
}


