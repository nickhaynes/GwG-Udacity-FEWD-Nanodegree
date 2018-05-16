/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

// Directions:
// Write a for...of loop that:
// 
// 1.) loops through each day in the days array
// 2.) capitalizes the first letter of the day
// 3.) and prints the day out to the console
//
// Your code should log the following to the console:
//
//   Sunday
//   Monday
//   Tuesday
//   Wednesday
//   Thursday
//   Friday
//   Saturday
//

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
    const newDay = day.charAt(0).toUpperCase() + day.substr(1);
    console.log(newDay);
}
