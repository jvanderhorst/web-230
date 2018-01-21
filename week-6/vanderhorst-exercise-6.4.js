/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 18 January 2018
; Modified By: Johnny Vanderhorst
; Description:  This program uses nested 
object literals to build object relationships
===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 6.4")); 
console.log('\n');



// start program

var ticket = {
    // ticket properties
    id: 2163,
    name: "Update operating system",
    dateCreated: "October 26, 2017",
    priority: "high",
    personId: 33765,

    person: {
        // person properties
        id: 2234,
        firstName: "Eric",
        lastName: "Smith",
        jobTitle: "System Analyst"
    }
};

// output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + 
" and assigned to employee " + ticket.person.firstName + " " + 
ticket.person.lastName + " (" + ticket.person.jobTitle + ")");


// end program