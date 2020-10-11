// Ternary operator

var firstName = 'John';
var age = 16;

//three operands : condition - true - false
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

//Switch statement: replacing if else if - multiple statements

var job = 'teacher';
switch(job) {
     case 'teacher':
     case 'instructor':    
         console.log(firstName + ' teaches kids how to code.');
         break;
     case 'driver':
         console.log(firstName + ' drives an uber in Lisbon.');
         break;
     case 'designer':
        console.log(firstName + ' designs beautiful websites.');        
        break;
     default:
         console.log(firstName + ' does something else');   
}

switch(true) {
    case age < 13:
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + " is a young man.");
        break;
    default:
        console.log(firstName + ' is a man.');            
}
