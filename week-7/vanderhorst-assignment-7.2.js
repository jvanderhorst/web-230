/*
============================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 22 January 2018
; Modified By: Johnny Vanderhorst
; Description: Constructor 
objects are object literals as functions
===========================================
*/ 

var header = require('../vanderhorst-header');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 7.2")); 
console.log('\n');

// start program

// constructor object
function Employee(id, firstName, lastName, title)
{
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [];

employees[0] = new Employee(1, "Thomas", "Edison", "Software Engineer");
employees[1] = new Employee(2, "Benjamin", "Franklin", "Programmer");
employees[2] = new Employee(3, "Nikola", "Tesla", "Project Manager");
employees[3] = new Employee(4, "Charles", "Babbage", "Product Manager");
employees[4] = new Employee(5, "Alexander", "Bell", "Business Analyst");

for (var k = 0; k < employees.length; k++)
{
    var emp = employees[k];

    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + emp.title);
}


// end program

