var Face = require('../face.js');

exports.GetValidFaces = function(test){
	test.equal(Face.GetFace('north').getName(), 'NORTH', 'should face north')
	test.equal(Face.GetFace('EAST').getName(), 'EAST', 'should face east')
	test.equal(Face.GetFace('South').getName(), 'SOUTH', 'should face south')
	test.equal(Face.GetFace('WeSt').getName(), 'WEST', 'should face west')
	test.done();
}

exports.GetInvalidFace = function(test){
	test.equal(Face.GetFace('other'), null, 'invalid face should return null')
	test.done();
}

