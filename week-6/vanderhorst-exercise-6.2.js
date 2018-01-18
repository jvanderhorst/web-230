/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 17 January 2018
; Modified By: Johnny Vanderhorst
; Description:  This program uses the 
try/catch/finally statement to demonstrate
JavaScript's exception handling mechanism
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 6.2")); 
console.log('\n');  

// start program

try {

    var num = 11;
    
    if (num > 10) throw "Enter number equal or less than 10";

    console.log(num);
    
    } catch (err) {
        console.log("Catch clause: " + err);
    
    } finally {
        console.log("Finally clause: End of program ...");
    
    }
    
    // end program
