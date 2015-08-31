//Implement the REPORT known action

var Action = require('./action.js');

Action.AddAction(
	'REPORT',
	function(context, data){
		if(context.robot != null){
			var message = context.robot.x + ',' + context.robot.y + ',' + context.robot.f.getName();
			context.Feedback.Show(message);
			context.Logger.Log("SUCCESS : REPORTED " + message);
		}else{
			context.Logger.Log("WARN    : Ignore REPORT - No valid robot on table");
		}
	},
	function(args){
		return {}
	}
);