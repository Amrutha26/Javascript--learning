var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Emily', 'Mark'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
          return 2020 - birthYear;
    } 
};
//Function: Method of john

console.log(john.calcAge(1990));


//We can access the 1990 directly from the john object using 'this' keyword
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Emily', 'Mark'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
          this.age =  2020 - this.birthYear;
    } 
};

john.calcAge();
console.log(john);
