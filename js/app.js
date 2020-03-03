/* eslint-disable indent */
'use strict';

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
    inputName = yourName + '!';
    return inputName;
}


function quiz(){
// this is question 1    
    var q1 = prompt ('Have you ever been to China?');
    var a1 ;
    while (q1 !=='y' && q1 !== 'yes' && q1 !== 'n' && q1 !== 'no'){
        q1 = prompt ('Have you ever been to China?');
    }
    if (q1 == 'y' || q1 == 'yes'){
        a1 = 'China changes every day, please visit it again once you got a chance.';
    }    else if (q1 == 'no' || q1 == 'n'){
        a1 = "Please visit China when you got a chance, you won't regred it!";
    }
// this is the question 2

    var q2 = prompt ('Have you ever served in the military?');
    var a2 ;
    while (q2 !=='y' && q2 !== 'yes' && q2 !== 'n' && q2 !== 'no'){
        q2 = prompt ('Have you ever served in the military?');
    }
    if (q2 == 'y' || q2 == 'yes'){
        a2 = 'Great! Thank you for your service!';
    }    else if (q2 == 'no' || q2 == 'n'){
        a2 = 'Military experience is amazing!';
    }

// this is question 3

    var q3 = prompt ('Have you ever fixed a helicopter before?');
    var a3 ;
    while (q3 !=='y' && q3 !== 'yes' && q3 !== 'n' && q3 !== 'no'){
        q3 = prompt ('Have you ever fixed a helicopter before?');
    }
    if (q3 == 'y' || q3 == 'yes'){
        a3 = 'Great! Fixing helicopters are fun, right?';
    }    else if (q3 == 'no' || q3 == 'n'){
        a3 = 'No worrys, working on a helicopter feels no different than a lawn mower!';
    }
 
// this is question 4

    var q4 = prompt ('Have you ever done a wall painting before?');
    var a4 ;
    while (q4 !=='y' && q4 !== 'yes' && q4 !== 'n' && q4!== 'no'){
        q4 = prompt ('Have you ever done a wall painting before?');
    }
    if (q4 == 'y' || q4 == 'yes'){
        a4 = "Aww, it's not as easy as we thought, right?";
    }    else if (q4 == 'no' || q4 == 'n'){
        a4 = "You gotta give a try, it's so interesting";
    }
  
// this is question 5

    var q5 = prompt ('Do you have kids?');
    var a5 ;
    while (q5 !=='y' && q5 !== 'yes' && q5 !== 'n' && q5!== 'no'){
        q5 = prompt ('Do you have kids?');
    }
    if (q5 == 'y' || q5 == 'yes'){
        a5 = 'Sometimes dealing with kid could be tough, right?';
    }    else if (q5 == 'no' || q5 == 'n'){
        a5 = 'Enjoy your life as hard as you could! Once you got kid, it will change a lot!';
    }

    document.getElementById("answer").innerHTML = a1 + "<br>" + a2 + "<br>" + a3 +"<br>" + a4 + "<br>" + a5 + "<br>";


}
