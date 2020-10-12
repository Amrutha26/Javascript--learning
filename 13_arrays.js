//Arrays - collection of variables
//Indexed from 0

//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);
console.log(names);

//Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
//To assign the last element in the array
names[names.length] = 'Benita';

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

//Add an element at the end of the array
john.push('blue');

//Add an element to the beginning of the array
john.unshift('Mr.')

//Removes an element at the end
john.pop()

//Removes the first element in the array
john.shift();

//Return the position of the argument that we passed in the array
john.indexOf(1990);

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
