// This class store a known action.
// every action have a name, transform function that perform the task of the action
// and a handleargs function that will extract needed arguments from the parts of the command
function ActionClass(name, transform, handleargs){
	this.name = name;
	this.transform = transform;
	this.handleargs = handleargs;
}
ActionClass.Actions = [];

exports.AddAction = function(name, transform, handleargs){
	ActionClass.Actions.push(new ActionClass(name, transform, handleargs));	
}

exports.GetAction = function(name){
	name = name.toUpperCase();
	for(var idx=0; idx<ActionClass.Actions.length; ++idx){
		if (ActionClass.Actions[idx].name == name){
			return ActionClass.Actions[idx];
		}
	}
	return null;
}