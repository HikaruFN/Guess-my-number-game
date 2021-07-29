'use strict';

//Score
let defaultScore = 20;



document.querySelector('.score').textContent = defaultScore;

//Highscore
let highScore = 0;

document.querySelector('.highscore').textContent = highScore;


//Hidden Number
let randomNumber = Math.trunc(Math.random()*20)+1;

//On click Check
document.querySelector('.check').addEventListener('click', checkNumber);

//On click Reset
document.querySelector('.again').addEventListener('click', reset);

//Function Check
function checkNumber(){  
    //0 is not a valid number
    if(document.querySelector('.guess').value <= '0'){
        document.querySelector('.message').textContent = '0 or negative are not a valid number!';
        //Number too High
    }else if(document.querySelector('.guess').value > randomNumber ){
        decreseScore('Score is to high!');
        //Number too low
    }else if(document.querySelector('.guess').value < randomNumber ){
        decreseScore('Score is to low!');
        //Nuber is equal
    }else if(Number(document.querySelector('.guess').value) === randomNumber ){
        document.querySelector('.message').textContent = 'Congratz you won!';
        defaultScore++;
        document.querySelector('.score').textContent = defaultScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
        if(defaultScore > highScore){
            highScore = defaultScore;
            document.querySelector('.highscore').textContent = highScore;
        };
        document.querySelector('.number').textContent = randomNumber;   
    }
};

//Function Reset

function reset(){
    randomNumber = Math.trunc(Math.random()*20)+1;
    defaultScore = 20;
    highScore = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent = 'Here we go again!';
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.number').textContent = '?';  
    document.querySelector('.guess').value = '';
}

//Function decrese score
function decreseScore(message){
    document.querySelector('.message').textContent = message;
    defaultScore--;
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor = '#222';
}