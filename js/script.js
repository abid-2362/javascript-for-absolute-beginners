// increment and decrement operators
// ++   Increment operator
// --   Decrement operator

/* // post and pre increment
let number = 1;
number++;   // this increments the number from 1 to 2
console.log(number);    // now value of number is 2;

// post increment example
let number1 = 10;
let number2 = 9;
let plusResult = number1 + ++number2;
console.log('plus result: ',plusResult);
console.log('number 2', number2);
 */


/*

// Truthy and Falsy Values
a = "";  // falsy values

// Falsy Values
// undefined, null, empty string
// false, number 0 are falsy values in 
// javascript

b = true; // truthy value
c = "something"; // truthy value



 
// Condition (Shart)
// explanation of condition

let num1 = 3;
let num2 = 3;
if (num1 > num2) {
    console.log(num1 + ' is greater than ' + num2);
} 

// if else
if (num1 > num2) {
    console.log(num1 + ' is greater than ' + num2);
} else {
    console.log(num1 + ' is not greater than ' + num2);
}

// if else-if
if (num1 > num2) {
    console.log(num1 + ' is greater than ' + num2);
} else if(num1 < num2) {
    console.log(num1 + ' is less than ' + num2);
} else {
    console.log(num1 + ' is equal to ' + num2);
}

*/
// ---



/* 
// ternary operator
const result = "0" ? true : false;
console.log(result);

 */


// loops
/* 
    There are 3 types of loops in JavaScript
    1. For loop (most common)
    2. While loop
    3. do-while loop (rarely used)
*/


/*
// for loop
for (let counter = 0; counter <= 10; counter++) {
    // do something in the loop
    console.log(counter);
}
*/

/* let counter1 = 0;
// while loop
while (counter1 <= 10) {
    console.log(counter1);
    counter1++;

    // long code.
}

// do while loop
do {
    console.log('do loop always run once before checking its condition')
} while (false);
 */



// using loops for useful prupose
let table = 10;
document.write("Generating table of " + table + " <br>");

for(let x = 1; x <= 10; x++) {
    document.write(table + " x " + x + " = " + table * x + "<br>");
}

document.write("<hr>");
// livereload

// let userNumber = prompt("Please enter the number to generate a table for it");
// console.log(userNumber); 


// excercise
/* 
    Generate the table of different numbers
    below by using for, and while loop.

    Accept numbers only between 1-10,
    number below the 1 and above the 10
    should return display the message to user
    that his number is not valid for our
    program to generate the table.

    Hint:
    use if, else to determine if the number
    is in the required range
*/
