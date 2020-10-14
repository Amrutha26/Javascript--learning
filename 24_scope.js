/*Scoping - where we can access a certain variable/function
Each new function creates a scope: the space/environment, in which the variables it defines are accessible
The only way too create a new scope is to write a new function - ONLY IN JS
Lexical scoping: a function that is lexically within another function gets access to the scope of the outer function(parent) */

//Global scope: Default scope
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); //This works because of scoping chain
    }
}


function third() {
    var d = 'John';
    //console.log(c); //Cannot access c because the execution stack is different from the scope chain
    console.log(a + d);
}

/* Global scope: a = 'Hello'
   first() scope: a = 'Hello' b = 'Hi'
   second() scope: a = 'Hello' b = 'Hi' c = 'Hey'

Locally scoped variables are not visible to their parent scopes */   

//Execution stack: Order in which functions are called
//Scope Chain: Order in which functions are written lexically

//The second() function gets access to the third() function because of scope chain
//The third() function is in another scope and therefore it cannot access c
