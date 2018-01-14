/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 13 January 2018
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
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

console.log(header.display("Johnny", "Vanderhorst", "Exercise 5.3")); 
console.log('\n');

// start program

// array-like object
var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        rating: 8
    },
    {
        firstName: "Wolfgang Amadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10
    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Classical",
        rating: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: 5
    }
];

console.log("-- COMPOSERS --");
composers.forEach(function(composer) { // iterate over the array
    console.log( // output results
        "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
});



// end program