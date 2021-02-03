// 1. Get the user to enter a Number
// 2. store that number in a var

let userNum = prompt("Chimichanga Game: Please enter a number here");

// 3. use conditional statement to check if the number is divisible by 3
//     If it is alert chimi
// 4. check if number is divisble by 5
//     if it is alert changas
// 5. check if num is divisible by 3 & 5
//     alert chimichangas

if (userNum % 3 == 0 && userNum % 5 == 0) {
    alert("You're a chimichanga! You win!");
} else if (userNum % 5 == 0 ) {
    alert ("You're just a changa. Reload and play again");
}  else if (userNum % 3 == 0){
    alert("You're just a chimi. Reload and play again");
} else {
    alert("Are you playing this game right? Reload and play again")
}