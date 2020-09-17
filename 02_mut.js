//Single line comment

/* 
Multiline comment
*/

var firstName = "John";
var age = 28;

// Type Coercion: automatic or implicit conversion of values from one data type to another
console.log(firstName + " " + age);

// Declare multiple variables in a single line
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable mutation: change the values of the variables even the datatype: dynamic typing
age = "twenty eight";
job = "driver";

//Alert: pop up window
alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// Allows the user to type (get input)
var lastName = prompt("What is your last name?");
console.log(firstName + " " + lastName);
