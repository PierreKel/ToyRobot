// The Face class implements an Enum with values for NORTH, EAST, SOUTH and WEST
// there is methods Pref that will move to the previous value, for example from EAST to NORTH
// and Next that move to the next value for example from EAST to SOUTH
// The enum also contain structures that indicate how x and y must be manipulates if an object is moved in this direction.
function FaceClass(val){
	this.value = (val >= 0)?val:0;
	
	this.Next = function(){
		if (this.value < FaceClass.Names.length-1) {
			++this.value;
		}else{
			this.value = 0;
		}
	}
	
	this.Prev = function(){
		if (this.value > 0){
			--this.value;
		}else{
			this.value = FaceClass.Names.length-1;
		}
	}
	
	this.getName = function(){
		return FaceClass.Names[this.value];
	}

	this.getOffset = function(){
		return FaceClass.Offsets[this.value];
	}
}
FaceClass.Names = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
FaceClass.Offsets = [{x:0, y:1}, {x:1, y:0}, {x:0, y:-1}, {x:-1, y:0}];

exports.GetFace = function(name) {
	if (name != undefined){
		var idx = FaceClass.Names.indexOf(name.toUpperCase());
		if (idx >= 0){
			return new FaceClass(idx);
		}else {
			return null;
		}
	}else{
		return new FaceClass(0);
	}
}