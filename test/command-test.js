var Table = require ('../table.js');
var Command = require('../command.js');
require('../actions/report-action.js');
require('../actions/move-action.js');
require('../actions/right-action.js');
require('../actions/left-action.js');
require('../actions/place-action.js');

exports.Valid_PLACE = function(test){
	var cmd = Command.GetCommand(['place', '1', '2', 'north']);
	test.notEqual(cmd, null);
	test.equal(cmd.data.x, 1);
	test.equal(cmd.data.y, 2);
	test.equal(cmd.data.f.getName(), 'NORTH');
	test.done();
}

exports.Invalid_PLACE = function(test){
	var cmd = Command.GetCommand(['place', '1', '2', 'northf']);
	test.equal(cmd, null);
	test.done();
}

exports.Valid_MOVE = function(test){
	var cmd = Command.GetCommand(['MOVE']);
	test.notEqual(cmd, null);
	test.done();
}

exports.Valid_LEFT = function(test){
	var cmd = Command.GetCommand(['left']);
	test.notEqual(cmd, null);
	test.done();
}

exports.Valid_RIGHT = function(test){
	var cmd = Command.GetCommand(['Right']);
	test.notEqual(cmd, null);
	test.done();
}

exports.Invalid_Command = function(test){
	var cmd = Command.GetCommand(['Oops']);
	test.equal(cmd, null);
	test.done();
}

exports.Valid_Execution = function(test){
	// Create dummy Context
	var ctx = {
		table: new Table(5,5),
		robot:null,
		Feedback:{Show:function(msg){}},
		Logger:{Log:function(msg){}}
	}
	Command.GetCommand(['place', '1', '1', 'east']).Execute(ctx);
	Command.GetCommand(['move']).Execute(ctx);
	Command.GetCommand(['left']).Execute(ctx);
	Command.GetCommand(['move']).Execute(ctx);
	Command.GetCommand(['move']).Execute(ctx);
	test.equal(ctx.robot.x, 2);
	test.equal(ctx.robot.y, 3);
	test.equal(ctx.robot.f.getName(), 'NORTH');
	test.done();
}

exports.Valid_IgnoreFallingMove = function(test){
	// Create dummy Context
	var ctx = {
		table: new Table(5,5),
		robot:null,
		Feedback:{Show:function(msg){}},
		Logger:{Log:function(msg){}}
	}
	Command.GetCommand(['place', '4', '1', 'east']).Execute(ctx);
	Command.GetCommand(['move']).Execute(ctx);
	test.equal(ctx.robot.x, 4);
	test.equal(ctx.robot.y, 1);
	test.equal(ctx.robot.f.getName(), 'EAST');
	test.done();
}