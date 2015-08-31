// this class find a known action to perform 
// and let it create a data structure of required parameters.
// the action and data is then stored together to be executed.
var Action = require('./actions/action.js');

function CommandClass(action, data){
	this.action = action;
	this.data = data;
	
	this.Execute = function(context){
		this.action.transform(context, this.data);
	}
}

exports.GetCommand = function(parts) {
	var action = Action.GetAction(parts[0]);
	if (action != null){
		var data = action.handleargs(parts);
		if (data != null){
			return new CommandClass(action, data);
		}
	}
	return null;
}

