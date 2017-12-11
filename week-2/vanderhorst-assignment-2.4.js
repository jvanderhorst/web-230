

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...

function fullName(firstName, lastName) {
    var firstName = "Johnny";
    var lastName = "Vanderhorst";
    return firstName + " " + lastName;
    
}

function dateWriter(year, month, day) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
    
}

function formatNumber(number, fixedPosition) {
    var number = 24.67
    return number.toFixed(1);
}

function convertToInt(string) {
    var age = Date.now() - string.getTime();
    var age_dt = new Date(age);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
    
}

function convertToFloat(string) {
    var number = 500000;
    return number.toFixed(2);
}

// output 
console.log('\n'); 
console.log(fullName());
console.log("Assignment 2.4");
console.log(dateWriter());
console.log('\n');
console.log("Hello my name is" + " " + (fullName()) + "!")
console.log('\n'); 
console.log("Today's date is" + " " + (dateWriter() + " " + "and the current temperature is" + " " + formatNumber()));
console.log('\n'); 
console.log("I am" + " " + (convertToInt(new Date(1975, 10, 27))) + " " + "years old and my savings account goal is" + " " + convertToFloat() + " " + "dollars");




// end program 