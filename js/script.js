function generateGrid(number) {
  //holds the string to be appended to the #grid div
  var divsToAppend = "";
  //holds the total amount of squares (number squared)
  var totalSquares = number * number;
  //holds the side dimension for the square
  var dimension = $('#grid').width();
  //dimension should be the size of the #grid div divided by the amount of squares for each side
  dimension /= number;
  //round down to trim decimals while still ensuring squares will fit on grid
  dimension = Math.floor(dimension);
  //subtract two pixels to account for border perimeter
  dimension -= 2;

  for(var i = 0; i < totalSquares; i++) {
    divsToAppend += '<div class="square" style="width: ' + dimension + 'px; height: ' + dimension + 'px;" />';
  }
  $('#grid').append(divsToAppend);
}

function clearGrid() {
  var node = document.getElementById("grid");
  node.innerHTML = '';
}

$(document).ready(function() {
  $('.square').on("mouseenter", function() {
    this.classList.add("mouseEnter");
  });

  generateGrid(12);

  $('button').click(function() {
    var input = parseInt(prompt("Enter a number"), 10);
    if(input != null){
      clearGrid();
      generateGrid(input);
    }
  });
});
