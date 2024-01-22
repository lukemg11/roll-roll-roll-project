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
    mean = Math.round(totalSum/numRolls);
    document.getElementById("meanval").innerHTML = mean;
}

function findMedian(){
    arrOfRolls.sort()
    median = arrOfRolls[arrOfRolls.length/2];
    document.getElementById("medval").innerHTML = median;
}
function findMode(){
    mode = 6;
    document.getElementById("modeval").innerHTML = mode;
}
function findFrequencies(){
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let seven = 0;
    let eight = 0;
    let nine = 0;
    let ten = 0;
    let eleven = 0;
    let twelve = 0;
    let thirteen = 0;
    let fourteen = 0;
    let fifteen = 0;
    let sixteen = 0;
    let seventeen = 0;
    let eighteen = 0;
    for(let i = 0; i < arrOfRolls.length; i++){
    if(arrOfRolls[i] == 1){
        one++;
    }
    if(arrOfRolls[i] == 2){
        two++;
    }
    if(arrOfRolls[i] == 3){
        three++;
    }
    if(arrOfRolls[i] == 4){
        four++;
    }
    if(arrOfRolls[i] == 5){
        five++;
    }
    if(arrOfRolls[i] == 6){
        six++;
    }
    if(arrOfRolls[i] == 7){
        seven++;
    }
    if(arrOfRolls[i] == 8){
        eight++;
    }
    if(arrOfRolls[i] == 9){
        nine++;
    }
    if(arrOfRolls[i] == 10){
        ten++;
    }
    if(arrOfRolls[i] == 11){
        eleven++;
    }
    if(arrOfRolls[i] == 12){
        twelve++;
    }
    if(arrOfRolls[i] == 13){
        thirteen++;
    }
    if(arrOfRolls[i] == 14){
        fourteen++;
    }
    if(arrOfRolls[i] == 15){
        fifteen++;
    }
    if(arrOfRolls[i] == 16){
        sixteen++;
    }
    if(arrOfRolls[i] == 17){
        seventeen++;
    }
    if(arrOfRolls[i] == 18){
        eighteen++;
    }
}
}
document.getElementById('f one').innerHTML = one;
document.getElementById('f two').innerHTML = two;
document.getElementById('f three').innerHTML = three;
document.getElementById('f four').innerHTML = four;
document.getElementById('f five').innerHTML = five;
document.getElementById('f six').innerHTML = six;
document.getElementById('f seven').innerHTML = seven;
document.getElementById('f eight').innerHTML = eight;
document.getElementById('f nine').innerHTML = nine;
document.getElementById('f ten').innerHTML = ten;
document.getElementById('f eleven').innerHTML = eleven;
document.getElementById('f twelve').innerHTML = twelve;
document.getElementById('f thirteen').innerHTML = thirteen;
document.getElementById('f fourteen').innerHTML = fourteen;
document.getElementById('f fifteen').innerHTML = fifteen;
document.getElementById('f sixteen').innerHTML = sixteen;
document.getElementById('f seventeen').innerHTML = seventeen;
document.getElementById('f eighteen').innerHTML = eighteen;
