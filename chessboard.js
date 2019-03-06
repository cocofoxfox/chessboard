function createBoard() {
    var board = document.getElementById('new-board');

    // creates a <table> element and a <tbody> element
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var rowNumber = parseInt(document.getElementById('row-number').value);
    var columnNumber = rowNumber;
    var whiteCellColor = document.getElementById('box-color').value
    // creating all cells
    for (var i = 0; i < rowNumber; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < columnNumber; j++) {
            // Create a <td> element 
            var cell = document.createElement("td");
            cell.className = 'table-cell';
            cell.id = toString((i+1)*columnNumber + (j+1));
            if((i%2==0 && j%2 == 0)||(i%2!=0 && j%2 != 0)){
                cell.className = 'table-cell white-cell';
                cell.bgColor = whiteCellColor;
            }else{
                cell.className = 'table-cell black-cell';
            }

            if(i == rowNumber-2){
                cell.innerHTML="<img src='pawn.jpg' width='40' height='40' />";
            }
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    table.appendChild(tableBody);
    // appends <table> into <body>
    board.appendChild(table);
    // sets the border attribute of table to 2;
    table.setAttribute("border", "1");
}

var state = false 
var currentPiece;
var currentCell;
var columnNumber = parseInt(document.getElementById('row-number').value);
var cells = document.getElementsByClassName('table-cell')

for (var i = 0; i < cells.length; i++) { 
   cells[i].onclick = function(){
       moveCell(this);
   };
}

function moveCell(cell) {
    if(cell.innerHTML!=''){
        x = parseInt(cell.id);
        if(x - columnNumber < 0 ){
            cells[x-columnNumber].innerHTML = cell.innerHTML;
            cell.innerHTML = '';
        }
        
    }
}