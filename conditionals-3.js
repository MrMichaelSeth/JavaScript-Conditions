// 1. Ask the user for Input

let userInput = prompt("Enter something here.....Anything:");

// 2. create if statement that will check if the input is a number or not
//      If it is display that they entered a num
//      If it isn't display that they didn't enter a number

if (isNaN(userInput)) {
    alert("You have not entered a number");
} else {
    alert('You have entered a number')
}
