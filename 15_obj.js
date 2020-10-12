//Objects and Properties

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Emily', 'Mark'],
    job: 'teacher',
    isMarried: false  
};

//Access the properties of object using the dot operator
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 2001;
jane['lastName'] = 'Smith';
console.log(jane);
