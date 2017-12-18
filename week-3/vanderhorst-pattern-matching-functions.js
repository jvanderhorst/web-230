var header = require('../week-2/vanderhorst-header'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match(numberOne, numberTwo) {
    if (numberOne == numberTwo) {
        return true;
    } else {
        return false;
    }
}


function logMismatch(variables, variables) {
    variables != variables
    return "The arguments do not match";
}

function logMatch(variables, variables) {
    variables == variables
    return "The arguments do match";
}

// six (6) test variables 
var firstItem = "house";
var secondItem = "dog";
var thirdItem = "truck";
var fourthItem = "car";
var fifthItem = "plane";
var sixthItem = "cake";


// Output from the match() function... 
console.log('\n');
console.log(header.display("Johnny", "Vanderhorst", "Exercise 2.4")); 
console.log('\n');
console.log(match("A", "B"));
console.log(match(2, 2)); 



// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (firstItem == firstItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (secondItem == secondItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (thirdItem == thirdItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (fourthItem == fourthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (fifthItem == fifthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (sixthItem == sixthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (firstItem == secondItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (secondItem == thirdItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (thirdItem == fourthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (fourthItem == fifthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (fifthItem == sixthItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

if (sixthItem == firstItem) {
    console.log(logMatch());
} else {
    console.log(logMismatch());
}

// end program 