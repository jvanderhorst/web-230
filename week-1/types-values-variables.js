/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Johnny Vanderhorst
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var firstName = "Thomas";
var lastName = "Hanson";
var middleName = "James";
var address = "241 Orchard Way, Raleigh NC";
var rateOfPay = 15;
var hireDate = "08/01/2016";


var employeeRecord = "First Name: " + firstName + "\n" + "Middle Name: " + middleName + "\n" + "Last Name: " + lastName + "\n" + 
"Address: " + address + "\n" + "Rate of Pay: $" + (rateOfPay + 2) + "\n" + "Hire Date: " + hireDate;

var firstName2 = "Tina";
var lastName2 = "Coughlin";
var middleName2 = "Marie";
var address2 = "35B Silver Sands Ave, El Paso TX";
var rateOfPay = 15;
var hireDate2 = "11/08/2012";


var employeeRecord2 = "First Name: " + firstName2 + "\n" + "Middle Name: " + middleName2 + "\n" + "Last Name: " + lastName2 + "\n" + 
"Address: " + address2 + "\n" + "Rate of Pay: $" + (rateOfPay + 4) + "\n" + "Hire Date: " + hireDate2;

var firstName3 = "Eric";
var lastName3 = "Lasalle";
var middleName3 = "Leslie";
var address3 = "667 Ingersol Dr, Berkely CA";
var rateOfPay = 15;
var hireDate3 = "09/09/2015";


var employeeRecord3 = "First Name: " + firstName3 + "\n" + "Middle Name: " + middleName3 + "\n" + "Last Name: " + lastName3 + "\n" + 
"Address: " + address3 + "\n" + "Rate of Pay: $" + (rateOfPay + 1) + "\n" + "Hire Date: " + hireDate3;

var firstName4 = "Genie";
var lastName4 = "Wiiliams";
var middleName4 = "Ciara";
var address4 = "54 Liberty Woods Way, Hinesville GA";
var rateOfPay = 15;
var hireDate4 = "08/01/2016";


var employeeRecord4 = "First Name: " + firstName4 + "\n" + "Middle Name: " + middleName4 + "\n" + "Last Name: " + lastName4 + "\n" + 
"Address: " + address4 + "\n" + "Rate of Pay: $" + rateOfPay + "\n" + "Hire Date: " + hireDate4;

var firstName5 = "Meagan";
var lastName5 = "Simmons";
var middleName5 = "Sky";
var address5 = "99 Shield Blvd, Lakeland VA";
var rateOfPay = 15;
var hireDate5 = "05/11/2012";


var employeeRecord5 = "First Name: " + firstName5 + "\n" + "Middle Name: " + middleName5 + "\n" + "Last Name: " + lastName5 + "\n" + 
"Address: " + address5 + "\n" + "Rate of Pay: $" + (rateOfPay + 8) + "\n" + "Hire Date: " + hireDate5;

console.log(employeeRecord);
console.log("\n"); 
console.log(employeeRecord2);
console.log("\n"); 
console.log(employeeRecord3);
console.log("\n"); 
console.log(employeeRecord4);
console.log("\n"); 
console.log(employeeRecord5);

// end of program 