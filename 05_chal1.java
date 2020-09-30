var markMass = 58;
var johnMass = 76;

var markHeight = 1.6;
var johnHeight = 1.2;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

var isMarkBmiHigherThanJohn = markBmi > johnBmi;
console.log("Is Mark\'s BMI greater than John\'s BMI? " + isMarkBmiHigherThanJohn );
