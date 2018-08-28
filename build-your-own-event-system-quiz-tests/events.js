// Create your own Event Tracker system:
//
// 1. create an `EventTracker` object
//    • it should accept a name when constructed
// 2. extend the `EventTracker` prototype with:
//    • an `on` method
//    • a `notify` method
//    • a `trigger` method
//
// EXAMPLE:
// function purchase(item) { console.log( 'purchasing ' + item); }
// function celebrate() { console.log( this.name + ' says birthday parties are awesome!' ); }
//
// var nephewParties = new EventTracker( 'nephews ');
// var richard = new EventTracker( 'Richard' );
//
// nephewParties.on( 'mainEvent', purchase );
// richard.on( 'mainEvent', celebrate );
// nephewParties.notify( richard, 'mainEvent' );
//
// nephewParties.trigger( 'mainEvent', 'ice cream' );
//

/*   Each event tracker object manages a list of events and callbacks, but also has a notify 
property to track a list of other objects to notify.  
The trigger method needs to loop through the events list and call each of the callbacks, AND loop through
the notify list triggering that object's trigger method.

var richard = new EventTracker('richard');

    richard._events
    richard._notify
    */


var EventTracker = function() {
    this.name = name;
    this._events = {};
    this._notify = {};
};

EventTracker.prototype.on = function(event, callback) {
    if (this._events[event] === undefined) {
        this._events[event] = [];
    }
    this._events[event].push( callback );
};

EventTracker.prototype.notify = function(event, other) {
    if (this._notify[event] === undefined) {
        this._notify[event] = [];
    }
    this._notify[event].push( other );
};

EventTracker.trigger = function(event, data) {
    var callbackList = this._events[event] || 0;
    var notificationList = this._notify[event] || 0;
    var i;

    for (i = 0; i < callbackList.length; i++) {
        callbackList[i].call( this, data );
    }

    for (i = 0; i < notificationList.length; i++) {
        notificationList[i].trigger( event, data );
    }
};