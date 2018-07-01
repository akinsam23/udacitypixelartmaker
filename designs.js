//variables to get canvas element,height,width
var c = document.getElementById('pixel_canvas');
var temph = $("#input_height");
var tempw = $("#input_width");

//An event listener that comes into action when Submit button is clicked .
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

var color = $("#colorPicker");

//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() {

    c.innerHTML = '';
    var height = temph.val();
    var width = tempw.val();

    //A function which fills color in the cell that was clicked and changes the color.
    var addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
    for (var i = 0; i < height; i++) {
        var row = c.insertRow(i);
        for (var j = 0; j < width; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
