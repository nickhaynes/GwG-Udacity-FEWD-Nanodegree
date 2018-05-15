/*
 * Programming Quiz: Facebook Friends (7-5)
 */
 
 // Directions:
// Create an object called facebookProfile. 
// The object should have 3 properties:
//
// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
//
// The object should also have 4 methods:
//
// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
//
 
// your code goes here

var facebookProfile = {
    name: "Nick",
    friends: 0,
    messages: [],
    postMessage: function postNewMessage(message) {
        addIt=facebookProfile.messages;
        addIt.push(message);
        return addIt;
    },
    deleteMessage: function deleteMessage(index) {
        deleteIt=facebookProfile.messages;
        deleteIt.splice(index, 1);
        return deleteIt;
    },
    addFriend: function() {
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function() {
        facebookProfile.friends--;
        return facebookProfile.friends;
    }
};
