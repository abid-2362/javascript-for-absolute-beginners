// JavaScript has multiple data types
// Data Types in JavaScript


/*
    String      -> any text data
    Integer     -> 10
    Float       -> 20.50
    Array       -> let employeeNames = ["Abid", "Ahmad", "Ashraf"]
    Object      -> let employee = {"name": "Abid", "address": "123 Web Town", "city": "position", "Developer"}
    Boolean     -> true or false
    undefined,
    null,
*/

// String Data
let name = "Abid Ali";

// ineteger data
let treesInGarden = 10;

// float data
let priceOfItem = 23.50;

// array data
let listOfCities = ['Islamabad', 'Lahore', "Faisalabad"];

// object data
let employeeDetails = {
    name: "Ahsan", // string
    position: "Developer", // string
    phone: "+921234567890", // string
    availableOnWeekend: false, // boolean
    age: 25 // integer
};

// boolean data
let isValid = false;


// undefined and null data
let age = undefined;
let workHours = null;

// accessing values
/* console.log(priceOfItem);

console.log('employee details', employeeDetails);

console.log('employee name', employeeDetails.name);

console.log('employee last name', employeeDetails.lastName);
 */

// reassigning or overwriting values in variables
// isValid = true;
// console.log('isValid: ',isValid);
// console.log(employeeDetails.name);
// employeeDetails.name = "Ahsan Ali";
// console.log('employee name: ',employeeDetails.name);

// Basic JavaScript Operators

/* 
    Arithmetic operators
    + - * / %

    Assignment Operator
    =

    Comparison Operators
    <
    <=
    >
    >=
    ==
    ===
*/

let number1 = 11;
let number2 = 5;

// addition
// console.log(number1 + number2);

// // subtraction
// console.log(number1 - number2);

// // division
// console.log(number1 / number2);

// // multiplication
// console.log(number1 * number2);

// // modulo operator
// console.log(number1 % number2); // 1

// comparison operators
console.log(number1 === number2);

// excercise
/* 
    variables number1 aur number2 mein values
    tabdeel karein aur doosre comparion
    operators laga kar console mein result
    check karein.

    hint:
    console.log(number1 < number2);
    and so on...
 */

let remainder = number1 % number2;
console.log(remainder);