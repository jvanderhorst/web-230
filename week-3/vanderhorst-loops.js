var header = require('../week-2/vanderhorst-header'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

console.log('\n');
console.log(header.display("Johnny", "Vanderhorst", "Exercise 3.4")); 
console.log('\n');

// test variable
var testNumber = 5;
var index = 0;

// for loop
console.log("-- Displaying for loop --");
for (var x = 1; x < 11; x++) {
    if (testNumber === x) {
        console.log(logMatch(testNumber, x));
    } else {
        console.log(logMismatch(testNumber, x));
    }
    
}

// while loop
console.log("\n-- Displaying while loop --"); 
while (index < 10) {
    index++;
    if (testNumber === index) {
        console.log(logMatch1(testNumber, index));
    } else {
        console.log(logMismatch1(testNumber, index));
    }
}

// Reused functions from exercise-3.2.js
function match() {
    if (testNumber, x) {
        return true;
    } else {
        return false;
    }
}

function logMismatch(testNumber, x) {
    testNumber != x
    return testNumber + " " + "does not match" + " " + x + "!";
}

function logMatch(testNumber, x) {
    testNumber == x
    return testNumber + " " + "does match" + " " + x + "!";
}

function logMismatch1(testNumber, index) {
    testNumber != index
    return testNumber + " " + "does not match" + " " + index + "!";
}

function logMatch1(testNumber, index) {
    testNumber == index
    return testNumber + " " + "does match" + " " + index + "!";
}