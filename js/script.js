// Multiple conditions check in 1 if block

// and (&&), or (||), not(!)

let userNumber = prompt("Please enter the number to generate a table for it");
if(userNumber < 1 || (userNumber > 10 && userNumber != 15)) {
    document.write("only numbers between 1 to 10 are allowed");
} else {
    console.log('generating table')
    for(let x = 1; x <= 10; x++) {
        document.write(`${userNumber} x ${x} = ${userNumber * x} <br>`);
    }
}
