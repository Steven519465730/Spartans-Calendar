console.log('Starting events.js');
const fs = require('fs');


var createEvent = (title, body) => {
	var events = [];
	var event = {
		title,
		body
	};
	try {
		var eventsString = fs.writeFileSync('events-data.json');
		events = JSON.parse(eventsString);
	}
	catch (e){
		
	}
	
	events.push(event);
	fs.writeFileSync('events-data.json', JSON.stringify(events));


}

var getAllEvents = () => {
	console.log('Getting all Events');
}
var getEvent = (title) => {
	console.log('Getting note', title);
}
var removeEvent = (title) => {
	// var events = fetchEvents();

	 // var filteredEvents = events.filter((events) => event.title !== title);


}
module.exports = {
	createEvent,
	getAllEvents,
	getEvent,
	removeEvent
}