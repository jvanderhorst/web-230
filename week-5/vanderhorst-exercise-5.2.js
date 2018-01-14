/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 12 January 2018
; Modified By: Johnny Vanderhorst
; Description:  This program uses the 
forEach() function, to iterate over the 
array and output the results
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 5.2")); 
console.log('\n');

// start program

// One dimensional array
var foods = ["hotwings", "burgers", "steak", "burritos", "pizza"]


foods.forEach(function(food) { // iterate over the array
    console.log(food) // output results
});








// end program