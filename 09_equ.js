//Falsy values: Undefined, null, 0, '', NaN
//Truthy values: NOT falsy values

var height;

//We have not defined the height and therefore it returns as a falsy value when it enters the if statement and hence goes to the else part.

height = 0;

if(height || height === 0) {
    console.log("Variable is defined.");
} else {
    console.log("Variable has NOT been defined");
}

//Equality operators
if(height == '23') {
    console.log("The == operator does type coercion!");
    //type coercion - string "23" and number 23 are same
}

// === -> does not do type coercion -> '23' and 23 are different
