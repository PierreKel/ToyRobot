// The table class store the boundaries how objects can be placed or moved on it.
// It also have a function IsValidPos that will evaluate a position and tell if it is a valid
// position on the table or not.

function TableClass(x,y){
	this.MinX = 0;
	this.MinY = 0;
	this.MaxX = x-1;
	this.MaxY = y-1;
	
	this.IsValidPos = function(x,y){
		return x >= this.MinX && x <= this.MaxX && y >= this.MinY && y <= this.MaxY;
	}
}

module.exports = function(x,y){
	return new TableClass(x,y);
}