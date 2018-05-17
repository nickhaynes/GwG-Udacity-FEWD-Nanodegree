/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let total = 0;
    let i=0;
    for (const num of nums) {
        total += num;
        i += 1;
    }
    if (i===0) {
        i=i+1;
    }
    let avg = total/i;
    return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
