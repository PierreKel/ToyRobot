// This class receive one command.
// resolve the command and then execute it.
var Command = require('./command.js');

function ExecutorClass(context){
	this.context = context;
	
	this.ExecuteCommand = function(command){
		// Split the command into its parts separated by either space or comma.
		var parts = command.split(/[, ]/);
		
		// Request command with a known action and letting it handle its required paramaters
		var cmd = Command.GetCommand(parts);
		
		// If a valid command was resolved execute it else log a warning to the log file.
		if (cmd != null){
			cmd.Execute(this.context);
		}else{
			context.Logger.Log("WARN    : Invalid Command '" + command + "'");
		}
	}
}

module.exports = function(context){
	return new ExecutorClass(context);
}