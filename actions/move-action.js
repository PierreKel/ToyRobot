//Implement a MOVE known action

var Action = require('./action.js');

Action.AddAction(
	'MOVE',
	function(context, data){
		if (context.robot != null){
			var offset = context.robot.f.getOffset();
			if (context.table.IsValidPos(context.robot.x + offset.x, context.robot.y + offset.y)){
				context.robot.x += offset.x;
				context.robot.y += offset.y;
				context.Logger.Log("SUCCESS : MOVE");
			}else{
				context.Logger.Log("WARN    : Ignore MOVE to prevent fall");
			}
		}else{
			context.Logger.Log("WARN    : Ignore MOVE - No valid robot on table");
		}
	},
	function(args){
		return {}
	}
);