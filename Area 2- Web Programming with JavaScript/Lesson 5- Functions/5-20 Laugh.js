/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (x) {
    chuckle='';
    for (var i=1; i<=x; i++) {
        chuckle=chuckle+'ha';
    }
    return chuckle+'!';
}

console.log(laugh(10));
