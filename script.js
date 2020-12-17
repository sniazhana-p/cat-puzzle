var imgSrc = "https://p0.pikrepo.com/preview/825/391/close-up-photograph-of-gray-cat-under-the-blanket.jpg"

var imgWidth = 25;
var imgHeight = 20;
var rows = 4;
var columns = 5;
var count = 0;
var total = rows*columns;

let array = ['a','b','c','d']
function randomize(puzzle){
  //build a function which randomizes the pieces of an array
 
 for(let i = puzzle.length-1; i>0;i--){

  let randomIndex = Math.floor(Math.random()*i)
  let accessedValue = puzzle[randomIndex]

  puzzle[randomIndex] = puzzle[i]
  puzzle[i] = accessedValue
 }
}

function init(){
$("h1").html("Solve the puzzle!")
$("#final").hide()

var puzzle = []

for(var i = 0;i<rows;i++){
  for(var j = 0;j<columns; j++){
 puzzle.push("<div class='"+(i*columns+j)+" imgContainer'>"+
"<img src="+imgSrc+
" style='margin-left: -"+(j*imgWidth/columns)+"rem;"+
"margin-top: -"+(i*imgHeight/rows)+"rem;'></img></div>");

$("#drop-zone").append("<div class='"+(i*columns+j)+
" imgContainer'></div>");   
  }
}

randomize(puzzle)

puzzle.forEach(function(piece){
  $("#pieces").append(piece)
})



 $(".imgContainer").css({
    "width": imgWidth / columns + "rem",
    "height": imgHeight / rows + "rem"
  });


  $("#pieces > .imgContainer").draggable();

  $("#drop-zone > .imgContainer").droppable({
  drop: function(event,ui){

    var destNum = $(this).attr("class").split(" ")[0]
    console.log(destNum)

    var pieceNum = ui.draggable.attr("class").split(" ")[0]
    console.log(pieceNum)

    console.log("destNum: " + destNum[0]+ "pieceNum: " + pieceNum[0])

    if(pieceNum == destNum) {
      
      count += 1
      console.log(ui.draggable.find("img"))
      $(this).append(ui.draggable.find("img")).css("border-style","none");
      ui.draggable.addClass("invisible")
      
      if(count == total) {
        $("h1").html("good job, click to replay")
        $("#final").show()
        $(".picture").empty()
      }
    }
    else{

    $(this).css({"background-color": "steelblue"});
    ui.draggable.css({"border":"solid steelblue"});

    }
  }
  });

// var attributes = $("#classdemo").attr("class").split("")
// console.log(attributes)
}






$(document).ready(function(){
$("#final").click(init)
})