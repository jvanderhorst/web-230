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
    return "The" + " " + variables + " " + "and" + " " + variables + " " + "do not match!";
}

function logMatch(variables, variables) {
    variables == variables
    return "The" + " " + variables + " " + "and" + " " + variables + " " + "do match!";
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
console.log(header.display("Johnny", "Vanderhorst", "Exercise 3.2")); 
console.log('\n');
console.log(match("A", "B"));
console.log(match(2, 2)); 



// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (firstItem == secondItem) {
    console.log(logMatch(firstItem, firstItem));
} else {
    console.log(logMismatch(firstItem, firstItem));
}

if (firstItem == secondItem) {
    console.log(logMatch(secondItem, secondItem));
} else {
    console.log(logMismatch(secondItem, secondItem));
}

if (thirdItem == thirdItem) {
    console.log(logMatch(thirdItem, thirdItem));
} else {
    console.log(logMismatch(thirdItem, thirdItem));
}

if (fourthItem == fourthItem) {
    console.log(logMatch(fourthItem, fourthItem));
} else {
    console.log(logMismatch(fourthItem, fourthItem));
}

if (fifthItem == fifthItem) {
    console.log(logMatch(fifthItem, fifthItem));
} else {
    console.log(logMismatch(fifthItem, fifthItem));
}

if (sixthItem == sixthItem) {
    console.log(logMatch(sixthItem, sixthItem));
} else {
    console.log(logMismatch(sixthItem, sixthItem));
}

if (firstItem == secondItem) {
    console.log(logMatch(firstItem, secondItem));
} else {
    console.log(logMismatch(firstItem, secondItem));
}

if (secondItem == thirdItem) {
    console.log(logMatch(secondItem, thirdItem));
} else {
    console.log(logMismatch(secondItem, thirdItem));
}

if (thirdItem == fourthItem) {
    console.log(logMatch(thirdItem, fourthItem));
} else {
    console.log(logMismatch(thirdItem, fourthItem));
}

if (fourthItem == fifthItem) {
    console.log(logMatch(fourthItem, fifthItem));
} else {
    console.log(logMismatch(fourthItem, fifthItem));
}

if (fifthItem == sixthItem) {
    console.log(logMatch(fifthItem, sixthItem));
} else {
    console.log(logMismatch(fifthItem, sixthItem));
}

if (sixthItem == firstItem) {
    console.log(logMatch(sixthItem, firstItem));
} else {
    console.log(logMismatch(sixthItem, firstItem));
}

// end program 