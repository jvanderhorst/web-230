/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 13 January 2018
; Modified By: Johnny Vanderhorst
; Description:  This program uses the 
map method, to filter complex data
structures
;===========================================
*/ 

var header = require('../vanderhorst-header');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

// array-like object
var famousComposers = [
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

// map method to produce filtered results
var comnposersByRating = famousComposers.map(function(composer) {
    return "Rating: " + composer.rating + '\n' + "Composer: " + composer.lastName + '\n'
});

var composersByGenre = famousComposers.map(function(composer) {
    return "Genre: " + composer.genre + '\n' + "Composer: " + composer.lastName + '\n'
});

// output
console.log(header.display("Johnny", "Vanderhorst", "Exercise 5.4")); 
console.log('\n');

// output filtered by ratings
console.log("-- COMPOSER BY RATING --");
comnposersByRating.forEach(function(ratings) {
    console.log(ratings);
});

// output filtered by genre
console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(genres) {
    console.log(genres)
});


// end program