var header = require('../vanderhorst-header'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
var firstName = "Johnny";
var lastName = "Vanderhorst";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

// function 
function myName() {
    return firstName + " " + lastName;
    
}

function dateToday(year, month, day) {
    return yyyy + '/' + mm + '/' + dd;
    
}

// output 
console.log('\n'); 
console.log(header.display("Johnny", "Vanderhorst", "Exercise 2.1")); 
console.log("\n");
console.log(myName());
console.log("Exercise 2.3");
console.log(dateToday());
console.log('\n');
console.log("Hello" + " " + (myName()) + "!")

// end program 