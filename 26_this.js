//this keyword in the global execution context is simply the window object 
//Window object is the default object
//console.log(this);

calculateAge(2001);
//In a regular function call, the this keyword always points to the window object

//function declaration
function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    //function expression
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        
        //function declaration
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();
//returns the john object - this keyword refers to the object that called the method

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//Method borrowing:
mike.calculateAge = john.calculateAge;
mike.calculateAge();
