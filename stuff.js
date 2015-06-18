function Game() {
  this.rows = [];
  for (var i = 0; i < 9; i++) {
    this.rows.push(new Row(i));
  }
}

Game holds blocks, columns, and rows
Blocks hold rows, columns, and cells
Columns and rows hold cells

=====================


function Grid () {
  this.a = new LittleBox(this);
  this.b = new LittleBox(this);
  this.c = new LittleBox(this);
  this.d = new LittleBox(this);
}

function LittleBox(target) {
  this.grid = target;
}

var grid = new Grid;

=====================

//Version 2

function Grid () {
  var a = new LittleBox();
  var b = new LittleBox();
  var c = new LittleBox();
  var d = new LittleBox();

  this.rowA = new Row(this,a,b);
  this.rowB = new Row(this,c,d);
  this.columnA = new Column(this,a,c);
  this.columnB = new Column(this,b,d);
}

function Row (grid,a,b) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function Column (grid,a,b) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function LittleBox (row,column) {
  this.row = row;
  this.column = column;
}

var grid = new Grid();
var thing = grid.rowA.b

=====================

//Version 3

function Grid () {
  this.rowA = new Row(this,a,b);
  this.rowB = new Row(this,c,d);
  this.columnA = new Column(this,a,c);
  this.columnB = new Column(this,b,d);

  var a = new LittleBox(this.rowA, this.columnA);
  var b = new LittleBox(this.rowA, this.columnB);
  var c = new LittleBox(this.rowB, this.columnA);
  var d = new LittleBox(this.rowB, this.columnB);

  this.rowA.a = a;
  this.rowA.b = b;
  this.rowB.a = c;
  this.rowB.b = d;

  this.columnA.a = a;
  this.columnA.b = c;
  this.columnB.a = b;
  this.columnB.b = d;
}

function Row (grid) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function Column (grid) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function LittleBox (row,column) {
  this.row = row;
  this.column = column;
}

var grid = new Grid();
var thing = grid.rowA.b

=====================

//Version 4


function Grid () {

  this.rows = [new Row(this), new Row(this)]
  this.cols = [new Col(this), new Col(this)]

  var sqrs = [
    new LittleBox(this.rowA, this.colA);
    new LittleBox(this.rowA, this.colB);
    new LittleBox(this.rowB, this.colA);
    new LittleBox(this.rowB, this.colB);
  ]

  this.rowA.a = a;
  this.rowA.b = b;
  this.rowB.a = c;
  this.rowB.b = d;

  this.colA.a = a;
  this.colA.b = c;
  this.colB.a = b;
  this.colB.b = d;
}

function Row (grid) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function Col (grid) {
  this.grid = grid;
  this.a = a;
  this.b = b;
}

function LittleBox (row,column) {
  this.row = row;
  this.col = col;
}

var grid = new Grid();
var thing = grid.rowA.b

===========================
//------ Version 5

function Sqr(digit,row,col) {
  this.digit = digit;
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
      new Sqr(str[c+3*r], this.rows[r], this.cols[c]);
    }
  }
}

var grid = new Grid(9);
