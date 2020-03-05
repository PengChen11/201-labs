/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';
var score = 0;
var inputName;

//This is the function to greeting you and put the greeting words in header

function greetings(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow >12) {
        greeting = 'Good afternoon!';
    } else if (hourNow >0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    var new_greeting = greeting;
    return new_greeting;
}

//This is where it asks your name and put it down in the header part too

function yourName(){
    var yourName = prompt('What is your name?');
    while (yourName === '') {
        yourName = prompt('What is your name?');
    }
    inputName = 'Hi ' + yourName + '! ';
    document.getElementById('yourname').innerHTML = inputName ;
}

//this is what happens when button 1 is clicked.

function question1(){
    var q1 = prompt('Does the US has more land area than China?').toLowerCase();
    var a1 ;
    while (q1 !=='y' && q1 !== 'yes' && q1 !== 'n' && q1 !== 'no'){
        q1 = prompt ('Invalid input. Does U.S. has more land than China? ').toLowerCase();
    }
    if (q1 === 'y' || q1 === 'yes'){
        a1 = 'Acturarely, China is 2.2% larger than the US land area.';
        alert (a1);
    } else if (q1 === 'no' || q1 === 'n'){
        a1 = 'Correct! China is 2.2% larger than the US land area.';
        alert (a1);
        score += 1;
    }
}

//this is what happens when button 2 is clicked.

function question2(){
    var q2 = prompt ('Will you stop buying corona beer due to the coronavirus?').toLowerCase();
    var a2 ;
    while (q2 !=='y' && q2 !== 'yes' && q2 !== 'n' && q2 !== 'no'){
        q2 = prompt ('Invalid input. Will you stop buying corona beer due to the coronavirus?').toLowerCase();
    }
    if (q2 === 'y' || q2 === 'yes'){
        a2 = 'Well, The beer has nothing to do with the virus! Those two are not related at all!';
        alert (a2);
    } else if (q2 === 'no' || q2 === 'n'){
        a2 = 'Great! The beer has nothing to do with the virus!';
        alert (a2);
        score += 1;
    }
}

//this is what happens when button 3 is clicked.

function question3(){
    var q3 = prompt ('Do you think Apache attach helicopter can only fly 200 miles without refueling?').toLowerCase();
    var a3 ;
    while (q3 !=='y' && q3 !== 'yes' && q3 !== 'n' && q3 !== 'no'){
        q3 = prompt ('Invalid input. Do you believe that Apache attack helicopter can only fly less than 200 miles without refueling?').toLowerCase();
    }
    if (q3 === 'y' || q3 === 'yes'){
        a3 = 'Got you! The Apache can fly 296 miles max without refueling!';
        alert (a3);
    } else if (q3 === 'no' || q3 === 'n'){
        a3 = 'Correct! The Apache can fly 296 miles max without refueling! ';
        alert (a3);
        score += 1;
    }

}

//this is what happens when button 4 is clicked.

function question4(){
    var q4 = prompt ('Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
    var a4 ;
    while (q4 !=='y' && q4 !== 'yes' && q4 !== 'n' && q4!== 'no'){
        q4 = prompt ('Invalid input. Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
    }
    if (q4 === 'y' || q4 === 'yes'){
        a4 = 'Aww, that\'s right! How could know it?';
        alert (a4);
        score += 1;
    } else if (q4 === 'no' || q4 === 'n'){
        a4 = 'Acturarely you can. Try to swallow a piece of metal and you\'ll find out. LOL ';
        alert (a4);
    }

}

//this is what happens when button 5 is clicked.

function question5(){
    var q5 = prompt ('Can you believe that golf has been played on the moon?').toLowerCase();
    var a5 ;
    while (q5 !=='y' && q5 !== 'yes' && q5 !== 'n' && q5!== 'no'){
        q5 = prompt ('Invalid input. Can you believe that golf has been played on the moon?').toLowerCase();
    }
    if (q5 === 'y' || q5 === 'yes'){
        a5 = 'That\'s right! In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.';
        alert (a5);
        score += 1;
    } else if (q5 === 'no' || q5 === 'n'){
        a5 = 'In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.';
        alert (a5);
    }
}

//this is what happens when button 6 is clicked.

function question6(){
    var guessNum = prompt('Please guess the magic number.');
    var myNum = 11;
    for (var i=0; i<4; i++){
        while ( isNaN(guessNum) || guessNum === '' ){
            guessNum = prompt('Invalid Input. Please guess the magic number');
        }
        var realNum = Number(guessNum);
        if (realNum > myNum && i < 3){
            alert('Your number is too high!');
            guessNum = prompt ('Please guess another number');
        } else if(realNum < myNum && i < 3){
            alert('Your number is too low!');
            guessNum = prompt ('Please guess another number');
        } else if (realNum === myNum){
            alert('Unbelievable!! You figured it out!!');
            document.getElementById('numberGame').innerHTML = 'Unbelievable!! You guessed my magic number!!!' + '<br>';
            score += 1;
            break;
        } else if (i===3){
            document.getElementById('numberGame').innerHTML = 'Sorry, all 4 chances are used! The magic number in my head is 11, LOL!' + '<br>';
        }
    }
}

//this is what happens when button 7 is clicked.

function question7(){
    var bears1 = prompt('Please enter your 1st choice.');
    var bears2 = prompt('Please enter your 2nd choice.');
    for (var a=0; a<6 ; a++){
        while (isNaN(bears1) || bears1 ==='' || bears1.length>1 ){
            bears1 = prompt('Just put the number for the answer! Please enter your 1st choice again.');
        }
        while (isNaN(bears2) || bears2 ==='' || bears2.length>1 ){
            bears2 = prompt('Just put the number! Please enter your 2nd choice again.');
        }
        var bears1Num = Number(bears1);
        var bears2Num = Number(bears2);
        var answer = [bears1Num, bears2Num];
        if ((answer[0] === 2 && answer[1] === 4) || (answer[0] === 4 && answer[1] === 2)){
            score += 1;
            alert('Awesome!! How do you know it?');
            break;
        } else if(a<5) {
            bears1 = prompt ('Urrrr, please re-choose your 1st answer');
            bears2 = prompt ('Urrr, really? Please re-choose your 2nd answer');
        }
    }
}

//question8
function question8(){
    var rightAnswer = ['whales','dolphins','porpoises','walruses','manatees','seals'];
    var attempts = 6;
    loop1: for ( var i=0; i<attempts;i++){
        var mammals = prompt('can you guess the mammals that live in the ocean?').toLowerCase();
        for (var answerIndex = 0; answerIndex < rightAnswer.length; answerIndex++){
            if(mammals === rightAnswer[answerIndex]){
                alert('Great! you guessed it!');
                score++;
                break loop1;
            }
        }
        if (i<attempts) alert('Really? That\'s an wrong Answer!');
    }
}


//this is what happens when button 'get my score' is clicked.

function showMyscore(){
    document.getElementById('answer').innerHTML = inputName + 'Your final score is ' + Math.floor(score/8*100) +'%.' + '<br>';
}

//this is what happens when button "reset score" is clicked

function refresh(){
    score = 0;
    alert('The score is reset. You can run through the test again now.');
    document.getElementById('answer').innerHTML = '';

}
