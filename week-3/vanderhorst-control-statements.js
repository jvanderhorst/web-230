var header = require('../vanderhorst-header'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

console.log('\n');
console.log(header.display("Johnny", "Vanderhorst", "Exercise 3.3")); 
console.log('\n');

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 32;

switch (eventKeyCode) {
    case 13:
    console.log("The enter key was pressed"); 
    break;
case 16: (eventKeyCode == 16)
    console.log("The shift key was pressed"); 
    break;
 case 32: (eventKeyCode == 32) 
    console.log("The spacebar key was pressed");
    break;
 case 8: (eventKeyCode == 8) 
    console.log("The backspace / delete key was pressed");
    break;
 default:
    console.log("Unrecognized key press"); 
    break;
}


// end program 