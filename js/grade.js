// Write a program that will print the letter grade, given a variable with 
// a test score. Display either "A", "B", "C", "D", or "F", for an score that 
// is an integer between 0 and 100.

// Requirements

// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like

let grade = 90;

switch(grade<101 && grade>=0) {
    case (grade >= 90):
        console.log("A");
        break;
    case (grade < 90 && grade >= 80):
        console.log("B");
        break;
    case (grade < 80 && grade >= 70):
        console.log("D");
        break;
    case (grade < 70 && grade >= 60):
        console.log("D");
        break;
    default: 
        console.log("F");
}