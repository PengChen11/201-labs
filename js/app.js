/* eslint-disable indent */
'use strict';
var score = 0;

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

function yourName(){
    var yourName = prompt('What is your name?');
    var inputName;
    while (yourName == '') {
        yourName = prompt('What is your name?');
    }
    inputName = 'Dear ' + yourName + '! ';
    document.getElementById("yourname").innerHTML = inputName ;
}


function question1(){
        // alert('You are about to play the guessing game! The first 5 questions will only take "yes", "y", "no" or "n" as the answer. ');
    // this is question 1    
    var q1 = prompt('Does the US has more land area than China?').toLowerCase();
    var a1 ;
    while (q1 !=='y' && q1 !== 'yes' && q1 !== 'n' && q1 !== 'no'){
        q1 = prompt ('Invalid input. Does U.S. has more land than China? ').toLowerCase();
    }
    if (q1 == 'y' || q1 == 'yes'){
        a1 = 'Acturarely, China is 2.2% larger than the US land area.';
        alert (a1);
    } else if (q1 == 'no' || q1 == 'n'){
        a1 = 'Correct! China is 2.2% larger than the US land area.';
        alert (a1);
        score += 1;
    }
}

function question2(){
    var q2 = prompt ('Will you stop buying corona beer due to the coronavirus?').toLowerCase();
    var a2 ;
    while (q2 !=='y' && q2 !== 'yes' && q2 !== 'n' && q2 !== 'no'){
        q2 = prompt ('Invalid input. Will you stop buying corona beer due to the coronavirus?').toLowerCase();
    }
    if (q2 == 'y' || q2 == 'yes'){
        a2 = 'Well, The beer has nothing to do with the virus! Those two are not related at all!';
        alert (a2);
    } else if (q2 == 'no' || q2 == 'n'){
        a2 = 'Great! The beer has nothing to do with the virus!';
        alert (a2);
        score += 1;
    }
}

function question3(){
    var q3 = prompt ('Do you think Apache attach helicopter an only fly 200 miles without refueling?').toLowerCase();
    var a3 ;
    while (q3 !=='y' && q3 !== 'yes' && q3 !== 'n' && q3 !== 'no'){
        q3 = prompt ('Invalid input. Do you believe that Apache attack helicopter can only fly less than 200 miles without refueling?').toLowerCase();
    }
    if (q3 == 'y' || q3 == 'yes'){
        a3 = 'Got you! The Apache can fly 296 miles max without refueling!';
        alert (a3);
    } else if (q3 == 'no' || q3 == 'n'){
        a3 = 'Correct! The Apache can fly 296 miles max without refueling! ';
        alert (a3);
        score += 1;
    }

}

function question4(){
    var q4 = prompt ('Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
    var a4 ;
    while (q4 !=='y' && q4 !== 'yes' && q4 !== 'n' && q4!== 'no'){
        q4 = prompt ('Invalid input. Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
    }
    if (q4 == 'y' || q4 == 'yes'){
        a4 = "Aww, that's right! How could know it?";
        alert (a4);
        score += 1;
    } else if (q4 == 'no' || q4 == 'n'){
        a4 = "Acturarely you can. Try to swallow a piece of metal and you'll find out. LOL ";
        alert (a4);
    }

}

function question5(){
    var q5 = prompt ('Can you believe that golf has been played on the moon?').toLowerCase();
    var a5 ;
    while (q5 !=='y' && q5 !== 'yes' && q5 !== 'n' && q5!== 'no'){
        q5 = prompt ('Invalid input. Can you believe that golf has been played on the moon?').toLowerCase();
    }
    if (q5 == 'y' || q5 == 'yes'){
        a5 = "That's right! In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.";
        alert (a5);
        score += 1;
    } else if (q5 == 'no' || q5 == 'n'){
        a5 = 'In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.';
        alert (a5);
    }
}

function question6(){
    var guessNum = prompt("Please guess the magic number.");
    var myNum = 11;
    for (var i=0; i<4; i++){
        while ( isNaN(guessNum) || guessNum == '' ){
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
            alert("Unbelievable!! You figured it out!!");
            document.getElementById("numberGame").innerHTML = 'Unbelievable!! You guessed my magic number!!!' + '<br>';
            score += 1;
            break;
        } else if (i===3){
            document.getElementById("numberGame").innerHTML = "Sorry, all 4 chances are used! The magic number in my head is 11, LOL!" + '<br>';
        }
    }
}

function showMyscore(){
    document.getElementById("answer").innerHTML = 'Your final score is ' + Math.floor(score/7*100) +"%." + "<br>";
}



// function quiz(){
//     var score =0;
//     alert('You are about to play the guessing game! The first 5 questions will only take "yes", "y", "no" or "n" as the answer. ');
//     // this is question 1
//     var q1 = prompt('Does the US has more land area than China?').toLowerCase();
//     var a1 ;
//     while (q1 !=='y' && q1 !== 'yes' && q1 !== 'n' && q1 !== 'no'){
//         q1 = prompt ('Invalid input. Does U.S. has more land than China? ').toLowerCase();
//     }
//     if (q1 == 'y' || q1 == 'yes'){
//         a1 = 'Acturarely, China is 2.2% larger than the US land area.';
//         alert (a1);
//     } else if (q1 == 'no' || q1 == 'n'){
//         a1 = 'Correct! China is 2.2% larger than the US land area.';
//         alert (a1);
//         score += 1;
//     }

//     // this is the question 2

//     var q2 = prompt ('Will you stop buying corona beer due to the coronavirus?').toLowerCase();
//     var a2 ;
//     while (q2 !=='y' && q2 !== 'yes' && q2 !== 'n' && q2 !== 'no'){
//         q2 = prompt ('Invalid input. Will you stop buying corona beer due to the coronavirus?').toLowerCase();
//     }
//     if (q2 == 'y' || q2 == 'yes'){
//         a2 = 'Well, The beer has nothing to do with the virus! Those two are not related at all!';
//         alert (a2);
//     } else if (q2 == 'no' || q2 == 'n'){
//         a2 = 'Great! The beer has nothing to do with the virus!';
//         alert (a2);
//         score += 1;
//     }

//     // this is question 3

//     var q3 = prompt ('Do you think Apache attach helicopter an only fly 200 miles without refueling?').toLowerCase();
//     var a3 ;
//     while (q3 !=='y' && q3 !== 'yes' && q3 !== 'n' && q3 !== 'no'){
//         q3 = prompt ('Invalid input. Do you believe that Apache attack helicopter can only fly less than 200 miles without refueling?').toLowerCase();
//     }
//     if (q3 == 'y' || q3 == 'yes'){
//         a3 = 'Got you! The Apache can fly 296 miles max without refueling!';
//         alert (a3);
//     } else if (q3 == 'no' || q3 == 'n'){
//         a3 = 'Correct! The Apache can fly 296 miles max without refueling! ';
//         alert (a3);
//         score += 1;
//     }

//     // this is question 4

//     var q4 = prompt ('Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
//     var a4 ;
//     while (q4 !=='y' && q4 !== 'yes' && q4 !== 'n' && q4!== 'no'){
//         q4 = prompt ('Invalid input. Do you think your stomach acid is strong enough to dissolve metal?').toLowerCase();
//     }
//     if (q4 == 'y' || q4 == 'yes'){
//         a4 = "Aww, that's right! How could know it?";
//         alert (a4);
//         score += 1;
//     } else if (q4 == 'no' || q4 == 'n'){
//         a4 = "Acturarely you can. Try to swallow a piece of metal and you'll find out. LOL ";
//         alert (a4);
//     }

//     // this is question 5

//     var q5 = prompt ('Can you believe that golf has been played on the moon?').toLowerCase();
//     var a5 ;
//     while (q5 !=='y' && q5 !== 'yes' && q5 !== 'n' && q5!== 'no'){
//         q5 = prompt ('Invalid input. Can you believe that golf has been played on the moon?').toLowerCase();
//     }
//     if (q5 == 'y' || q5 == 'yes'){
//         a5 = "That's right! In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.";
//         alert (a5);
//         score += 1;
//     } else if (q5 == 'no' || q5 == 'n'){
//         a5 = 'In 1971, Alan Shepard hit two golf balls on the lunar surface with a makeshift 6-iron.';
//         alert (a5);
//     }

//     //the following is the number guessing game:
//     var guessNum = prompt("Let's play a number guessing game now . You will have total of 4 chances to guess it. Please input a number.");
//     var myNum = 11;
//         for (var i=0; i<4; i++){
//             while ( isNaN(guessNum) || guessNum == '' ){
//                 guessNum = prompt('Invalid Input. Please guess a number');
//             }
//             var realNum = Number(guessNum);
//             if (realNum > myNum && i < 3){
//                 alert('Your guess number is too high!');
//                 guessNum = prompt ('Please guess another number');
//             } else if(realNum < myNum && i < 3){
//                 alert('Your guess number is too low!');
//                 guessNum = prompt ('Please guess another number');
//             } else if (realNum === myNum){
//                 alert("Unbelievable!! You guessed it!!");
//                 document.getElementById("numberGame").innerHTML = 'Unbelievable!! You guessed my magic number!!!' + '<br>';
//                 score += 1;
//                 break;
//             } else if (i===3){
//                 document.getElementById("numberGame").innerHTML = "Sorry, all 4 chances are used! The magic number in my head is 11, LOL!" + '<br>';
//             }
//         }
//         // while (mutilCho !== 'done'){
//         //     var mutilCho=prompt('Polar bears are sometime lonely, hard to find another polar bear to mate with. So, from the following list, what do you think the polar bear have been mating with?  A. a human.   B. another polar bear.  C. a tree hole.  D. grizzlies.  Input "done" when finished.' ).toLowerCase();
//         //     var yourAns = [mutilCho[i]]
//         // }
//         // var myAnswer = ['b','d'];
//         // for (var a=0; a<6; a++){
//         //     while
//         // }
//     document.getElementById("answer").innerHTML = 'Your final score is ' + Math.floor(score/7*100) +"%." + "<br>";
// }