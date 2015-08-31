//Implement a PLACE known action
// Note currently this is the only action that extract parameters

var Action = require('./action.js');
var Face = require('../face.js');
var Robot = require('../robot.js');

Action.AddAction(
	'PLACE',
	function(context, data){
		if (context.table.IsValidPos(data.x, data.y)){
			if (context.robot == null){
				context.robot = new Robot(data.x, data.y, data.f);
				context.Logger.Log("SUCCESS : New robot placed");
			}else{
				context.robot.x = data.x;
				context.robot.y = data.y;
				context.robot.f = data.f;
				context.Logger.Log("SUCCESS : Robot re-placed");
			}
		}else{
			context.Logger.Log("WARN    : Ignore PLACE to prevent fall");
		}
	},
	function(args){
		if (args.length >=4){
			var x = parseInt(args[1]);
			var y = parseInt(args[2]);
			var f = Face.GetFace(args[3]);
			if (!isNaN(x) && !isNaN(y) && f != null){
				return {
					x:x,
					y:y,
					f:f
				}
			}
		}
		return null;
	}
);