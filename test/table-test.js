var Table = require('../table.js');

exports.TableValidPositions = function(test){
	var table = new Table(5,5);
	test.ok(table.IsValidPos(0,0), '0,0 is valid')
	test.done();
}

exports.TableInvalidPos = function(test){
	var table = new Table(5,5);
	test.ok(!table.IsValidPos(1,5), '1,5 is valid')
	test.done();
}