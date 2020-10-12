// LOOPS

//For loop
for(var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for(var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//While loop
var i = 0;
while (i < john.length) {
     console.log(john[i]);
     i++;
}

//Continue and break statements

//Continue - to quit just the current iteration of the loop and then continue to the next one.
//Break = breaks out of the loop itself

//Looping backwards
for(var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
