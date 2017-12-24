/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 25 June 2017
; Modified By: Johnny Vanderhorst
; Description:  This program demonstrates the
; use of a predicate in a filter() function
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
// array of states
var state = ["Texas", "North Carolina", "Georgia", "Cailfornia", "Alabama"]

// array function
function getState() {
    for (var x = 0; x < state.length; x++) {
        console.log(state[x]);
    }
}

// filter function
function getValue(el, val) {
    if (el == val)
    return val;
}

// Output

console.log(header.display("Johnny", "Vanderhorst", "Exercise 4.4")); 
console.log('\n');
console.log("-- ORIGINAL ARRAY --");
getState(state);// display array
console.log('\n');
console.log("-- SORTED ARRAY --");
getState(state.sort());// display sorted array
console.log('\n');
console.log("-- SELECTED VALUE --");
console.log( // filter method
    state.filter
    (
        function (el) {
            return getValue(el, "North Carolina")
            }
        )[0]
);

// end program