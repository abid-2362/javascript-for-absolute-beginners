// Functions in JavaScript

function generateTable(number) {
    if(!number) {
        return;
    }
    for (let x = 1; x <= 10; x++) {
        document.write(`${number} x ${x} = ${number * x} <br>`);
    }
    document.write("<hr>");
}