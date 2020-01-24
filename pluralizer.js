// Write a program that starts like...

// var thing = 'cat';
// var count = 5;
// and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

// Requirements

// Your program should pluralize the word based on an integer (count)

var thing = "cat";
var count = 6;

console.log(thing + (count === 1 ? "" : "s"));