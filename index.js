var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

var delimiter = /[.,_]/g;

var spacedString = numberString.replace(delimiter, ' ');

/*create display for sudoku; not interactive, just display grid*/
function displayGrid () {
  for (var i = 0; i<spacedString.length; i+=9) {
    if (i%27 === 0) {
      console.log("+---------+---------+---------+");
    }
    
    console.log("| " + spacedString[i] + "  " + spacedString[i+1] + "  " + spacedString[i+2] + " | "
    + spacedString[i+3] + "  " + spacedString[i+4] + "  " + spacedString[i+5] + " | "
    + spacedString[i+6] + "  " + spacedString[i+7] + "  " + spacedString[i+8] + " |")
  }
  console.log("+---------+---------+---------+")
}

displayGrid();

/*creating columns and rows out of the display*/
/*
var row0 = spacedString.substr(0,8);
var row1 = spacedString.substr(9,17);
var row2 = spacedString.substr(18,26);
var row3 = spacedString.substr(27,35);
var row4 = spacedString.substr(36,44);
var row5 = spacedString.substr(45,53);
var row6 = spacedString.substr(54,62);
var row7 = spacedString.substr(63,71);
var row8 = spacedString.substr(72,80);

var arrayOfRows = [row0, row1, row2, row3, row4, row5, row6, row7, row8];

var arrayOfColumns = [[],[],[],[],[],[],[],[],[]];

var j = 0;
for (var i = 0; i < 9; i++) {
  j=i;
  for(j; j < spacedString.length; j += 9) {
    arrayOfColumns[i].push(spacedString[j]);
  }
}

console.log(arrayOfColumns);
*/

// block 1: 0-2, 9-11, 18-20





