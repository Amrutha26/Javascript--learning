//If you want to run a piece of code a lot of times, then use a function
//FUNCTIONS 

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageAmru = calculateAge(2001);
console.log(ageAmru);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
     
}

yearsUntilRetirement(2001, 'John');
