// Load fs to write to a log file
var fs = require('fs');

// load all the commands
require('./actions/report-action.js');
require('./actions/move-action.js');
require('./actions/right-action.js');
require('./actions/left-action.js');
require('./actions/place-action.js');

// Load the rest of the classed needed in main program
var Executor = require('./executor.js');
var InputReader = require('./input-reader.js');
var Table = require('./table.js');

// Create an initial context class

// Note Logger and Feedback is internal because they so simple.
// It will be better to re-factor and move them to actual classes in separate files
var ctx = {
	table: new Table(5,5),
	Feedback:{
		Show:function(msg){
			process.stdout.write(msg + '\n');
		}
	},
	Logger:{
		Log:function(msg){
			fs.appendFile('ToyRobot.log', msg + '\n', function (err) {});
		}
	},
	robot:null
};

// Create an executer to pass to the reader
var exec = new Executor(ctx);

// Create the reader. NOTE this start reading input automatically.
// to run a file redirect stdin like this < input.txt
var Reader = new InputReader(exec);