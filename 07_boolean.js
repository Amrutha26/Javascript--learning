//Boolean logic: Deals with true and false values
// AND && -> true if ALL are true
// OR || -> true if ONE is true
// NOT ! -> inverts true/false value

var firstName = 'John';
var age = 16;

if(age < 13) {
    console.log(firstName + ' is a boy.');
    // && - has lower precedence when compared with >= 
} else if(age >= 13 && age < 20 ) { //Between 13 and 20
   console.log(firstName + ' is a teenager.');
}  else if( age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
