var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

var delimiter = /[.,_]/g;

var spacedString = numberString.replace(delimiter, ' ');

function Grid(size) {
  this.rows = [];
  this.cols = [];
  this.blocks = [];
  for (var i=0; i<size; i++) {
    this.rows[i] = new Row(this);
    this.cols[i] = new Col(this);
    this.blocks[i] = new Block(this)
  }

function Block(grid) {
  this.grid = grid;
  this.sqrs = sqrs;
}

function Col(grid) {
  this.grid = grid;
  this.sqrs = [];
}

function Row(grid) {
  this.grid = grid;
  this.sqrs = [];
}

function Sqr(row, col, blockNum, inputChar) {
  this.number = inputChar;
  this.row = row;
  this.col = col;
  this.block = blockNum;
  row.sqrs.push(this);
  col.sqrs.push(this);
}
  
  var i = 0
  for (var r=0; r<size; r++) {
    for (var c=0; c<size; c++) {
      blockNum = (Math.floor(row/3)*3) + Math.floor(col/3);
      inputChar = numberString[i]
      new Sqr(this.rows[r], this.cols[c], blockNum, inputChar);
      i++
    }
  }
}

var grid = new Grid(9);
