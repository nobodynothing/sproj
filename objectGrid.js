function Sqr(row,col) {
	this.row = row;
	this.col = col;
	row.sqrs.push(this);
	col.sqrs.push(this);
}

function Col(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Row(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Grid(size) {

	this.rows = [];
	this.cols = [];
	for (var i=0; i<size; i++) {
		this.rows[i] = new Row(this);
		this.cols[i] = new Col(this);
	}

	for (var r=0; r<size; r++) {
		for (var c=0; c<size; c++) {
			new Sqr(this.rows[r],this.cols[c]);
		}
	}
}

var grid = new Grid(9);
