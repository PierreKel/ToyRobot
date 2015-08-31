// Implement the RIGHT known action

var Action = require('./action.js');

Action.AddAction(
	'RIGHT',
	function(context, data){
		if (context.robot != null){
			context.robot.f.Next();
			context.Logger.Log("SUCCESS : RIGHT");
		}else{
			context.Logger.Log("WARN    : Ignore RIGHT - No valid robot on table");
		}
	},
	function(args){
		return {}
	}
);