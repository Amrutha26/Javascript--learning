//HOISTING
//Only works for function declarations

//Function declaration
calculateAge(2001);

function calculateAge(year) {
    console.log(2020 - year);
}

// Function expression
var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(2001);

//VARIABLES

console.log(age);
var age = 23; //stores in the global execution context - VO
//undefined

function foo() { //own execution context -VO
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
