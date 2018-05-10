console.log('Starting notes.js');

const fs = require('fs');
const _ = require('lodash');
const events = require('./events.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command ', command);
console.log('Yargs', argv);

if (command === 'create') {
	console.log('Creating new event');
	events.createEvent(argv.title, argv.body);
} 
else if (command === 'list') {
	events.getAllEvents();
} 
else if (command === 'read') {
	events.getEvent(argv.title);
} 
else if (command === 'remove') {
	events.removeEvent(argv.title);
}
else {
	console.log('Command not recognized')
}










