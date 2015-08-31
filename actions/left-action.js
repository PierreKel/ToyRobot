// Implement a LEFT Turn known action

var Action = require('./action.js');

Action.AddAction(
	'LEFT',
	function(context, data){
		if (context.robot != null){
			context.robot.f.Prev();
			context.Logger.Log("SUCCESS : LEFT");
		}else{
			context.Logger.Log("WARN    : Ignore LEFT - No valid robot on table");
		}
	},
	function(args){
		return {}
	}
);