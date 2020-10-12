// TO AVOID DRY - DON'T REPEAT YOURSELF - we use funtions

//Function declaration
function whatDoYouDo(job,firstName) {

}

//Function expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
      case 'teacher':
            return firstName + " teaches kids how to code";
      case 'driver':
            return firstName + " drives a cab in Lisbon.";
      case 'designer':
            return firstName + " designs beautiful websites";
      default:
          return firstName + " does something else";
  }
}

console.log(whatDoYouDo('teacher', 'John'));

//Return keyword not only returns the statement but also the function finishes immediately and thus break keyword is not necessary here.

// Anything that produces a result is known as an expression.

//They perform actions but do not produce immediate result. - statements
