/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 25 June 2017
; Modified By: Johnny Vanderhorst
; Description:  This program demonstrates the
; use of filtering JavaScript arrays
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
Expected output:

FirstName LastName
Exercise 4.3
Today's Date

-- DISPLAYING ARRAY ITEMS --
Car
Truck
Motorcycle
Airplane
Bus

-- SELECTED VALUE --
Motorcycle

-- SELECTED VALUE --
Bus

*/

// start program
// one dimensional array
var vehicle = ["car", "truck", "motorcycle", "bus", "plane"];


// function
function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val) {
            return arr[k];
        }
    }
}

// Output
console.log(header.display("Johnny", "Vanderhorst", "Exercise 4.3")); 
console.log('\n');

// display the array's content
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var k = 0; k < vehicle.length; k++) {
    console.log(vehicle[k]);
}

// unit test
console.log('\n');
console.log("-- SELECTED VALUE --");
console.log(getValue(vehicle, "car"));

// unit test
console.log('\n');
console.log("-- SELECTED VALUE --");
console.log(getValue(vehicle, "plane"));

// end program
