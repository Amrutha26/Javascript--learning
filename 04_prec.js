// Operator precedence

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
// returns true: - >= = 
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x,y;
x= (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// Associativity: Assignment operators: right to left
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// Console log two values
console.log(x,y);

// More operators
// x = x *2;
x *= 2;
console.log(x);

// x = x + 10
x += 10;
console.log(x);

// x = x + 1
x++;
console.log(x);

//x = x - 1
x--;
console.log(x);
