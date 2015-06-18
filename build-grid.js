var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

function Grid(size) {
  this.rows = [];
  this.cols = [];
  for (var i=0; i<size; i++) {
    this.rows[i] = new Row(this);
    this.cols[i] = new Col(this);
  }

function Col(grid) {
  this.grid = grid;
  this.sqrs = [];
}

function Row(grid) {
  this.grid = grid;
  this.sqrs = [];
}

function Sqr(row, col, inputChar) {
  this.digit = digit;
  this.row = row;
  this.col = col;
  row.sqrs.push(this);
  col.sqrs.push(this);
}

  for (var r=0; r<size; r++) {
    for (var c=0; c<size; c++) {
      new Sqr(str[c+3*r], this.rows[r], this.cols[c]);
    }
  }
}

var grid = new Grid(9);
