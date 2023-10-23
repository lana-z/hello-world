'use strict';


alert("Hello! This website is about managing stress. Let's get started.");

const userName = prompt("First, do you mind me asking your name?");

const userStresslevel = prompt("On a 1-10 scale, how stressed are you feeling today?")

while (true) {
    userStresslevel = prompt("On a 1-10 scale, how stressed are you feeling today?");
    if (isNaN(userStresslevel) && userLikelyhood >= 1 && userStresslevel <= 10) 
    }


document.write("Ah, thanks for sharing that you're feeling stress at level " + userStresslevel + ".")


if (userStresslevel <= 5){
    document.write(" Yay, you're feeling below average stress today!");
}  
    else {
    document.write(" Rats, that's a lot of stress.")
}


//next lab conditional function

function isBtwn1and10(userStresslevel){
    let message = '';

    if (userStresslevel > 10){
            message = "That's higher than 10";
     } else if (userStresslevel <= 0){
            message = "That's not between 1 and 10";   
    }
    return message;
}

const stressLevel = isBtwn1and10(userStresslevel)

if (stressLevel) {
    alert(stressLevel)
}


const userLikelyhood = prompt("How likely are you to consider runnning as a stress reliever, " + userName + "?")

if (userLikelyhood >= 5){
    document.write(" Glad you're open to trying running to lower your stress, " + userName + ".");
}  
    else {
    document.write(" Hopefully this site will help convince you to try running for stress relief, " + userName + ".")
}
function userStresslevel() {

    let output = '';
    let rating = prompt(userStresslevel);
    for(let i = 0; i < rating; i++){
        output += "<img src='https://images.unsplash.com/photo-1585089858717-f4378c2031d8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D'/>";
    }

    return document.write(output);