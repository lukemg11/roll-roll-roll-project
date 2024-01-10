const dice = 1;
const sumOfRoll = 0;
const roll1 = document.getElementById("roll1");
function rollDice(){
    for(let i = 0; i++; i < dice)
    {
        sumOfRoll += 2;//(Math.random()*6 + 1);
    }
    console.log("sumOfRoll = " + sumOfRoll);
};
// roll1.addEventListener("click", rollDice());
function display()
{
    console.log(sumOfRoll);
}
display();