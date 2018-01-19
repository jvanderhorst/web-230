/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 17 January 2018
; Modified By: Johnny Vanderhorst
; Description:  This program uses Object 
literals to create class-like constructs
===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 6.3")); 
console.log('\n');

// start program

// object and property names
var ticket = {
    id: 1011,
    name: "Bank of America Stadium",
    requester: "Johnny Vanderhorst"
    
};   

// output
console.log("ID: " + ticket.id + ", Name: " + ticket.name + ", Requestor: " + ticket.requester)
    
// end program