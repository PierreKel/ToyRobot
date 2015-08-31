// THe Robot class is real simple it only store its current state.

function RobotClass(x,y,f){
	this.x=x;
	this.y=y;
	this.f=f;
}

module.exports = function(x,y,f){
	return new RobotClass(x,y,f);
}