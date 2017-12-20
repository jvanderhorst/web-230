/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 25 June 2017
; Modified By: Johnny Vanderhorst
; Description: 

;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
// One dimensional array with 5 string elements
var fruit = ["Apple", "Grape", "Plum", "Pear", "Orange"];

// function
function getFruit() {
    for (var j =0; j < fruit.length; j++) {
        console.log(fruit[j]);
    }
} 

// Output from the getFruit() function

console.log(header.display("Johnny", "Vanderhorst", "Exercise 4.2")); 
console.log('\n');//New line
getFruit(fruit);

// end program

