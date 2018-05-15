/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here

function buildTriangle(num) {
    var tri = "";
    for (var i = 1; i <= num; i++) {
        tri += (makeLine(i));
    }
    return tri;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
