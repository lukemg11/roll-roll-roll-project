var dice = 1;
var sumOfRoll = 0;
const roll1 = document.getElementById("roll1");
roll1.addEventListener("click", rollDice())
function rollDice(){
    sumOfRoll=Math.trunc((Math.random()*6 + 1));
    console.log("sumOfRoll = " + sumOfRoll);
};
// roll1.addEventListener("click", rollDice());
rollDice();