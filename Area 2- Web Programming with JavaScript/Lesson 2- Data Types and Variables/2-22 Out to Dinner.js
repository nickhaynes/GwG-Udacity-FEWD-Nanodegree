/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// Directions:
// Create a variable called bill and assign it 
// the result of 10.25 + 3.99 + 7.15 (don't 
// perform the calculation yourself, let JavaScript 
// do it!). Next, create a variable called tip and 
// assign it the result of multiplying bill by a 
// 15% tip rate. Finally, add the bill and tip 
// together and store it into a variable called 
// total.
// 
// Print the total to the JavaScript console.
//
// Hint: 15% in decimal form is written as 0.15.

// your code goes here

item1 = 10.25
item2 = 3.99
item3 = 7.15

bill = item1 + item2 + item3

tip = bill * 0.15

total = bill + tip

console.log(total.toFixed(2))
