'use strict';


alert("Hello! This website is about managing stress. Let's get started.")

const userName = prompt("First, do you mind me asking your name?")

const userStresslevel = prompt("Would you mind sharing: On a 1-10 scale, how stressed are you feeling today?")

document.write("Ah, thanks for sharing that you're feeling stress at level " + userStresslevel + ".")


if (userStresslevel <= 5){
    document.write(" Yay, you're feeling below average stress today!");
}  
    else {
    document.write(" Rats, that's a lot of stress.")
}

const userLikelyhood = prompt("How likely are you to consider runnning as a stress reliever, " + userName + "?")

if (userLikelyhood >= 5){
    document.write(" Glad you're open to trying running to lower your stress, " + userName + ".");
}  
    else {
    document.write(" Hopefully this site will help convince you to try running for stress relief, " + userName + ".")
}

function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

addTwoNumbers(;)


//these two console.logs aren't working 
//- why?
console.log("Hi there, ");
console.log(userName);