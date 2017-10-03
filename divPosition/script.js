var sliderX = .1;
var sliderY = 1;

console.log('Script running');
//Wait till all content is loaded, could be external fonts scripts from other servers etc....
if (document.readyState != 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');
  getSliderValue();
  placeDivs();
  collision();

}

// this function gets values from two sliders that can be used to move the divs across the screen

function getSliderValue() {
  var slider1 = document.getElementById("xRange");
  var outputX = document.getElementById("sliderXTitle");
  //  outputX.innerHTML = slider1.value;
  slider1.oninput = function() {
    sliderX = this.value / 100;
    outputX.innerHTML = " " + this.value;
    placeDivs();
    collision();
  }
}

$(function() {
  $(".div").draggable();
  $(".div").resizable();
});

$('div[class^="div"]').click(function() {
  $(this).css('z-index', 2);
  //reset other sibling div's z-index to default value (i.e. 1)
  $(this).siblings('div').css('z-index', 1);
});

// this function places the divs on the screen.
// Div 1 gets its coordinates from the slider, which is a fraction of the window width
// Div 2 and 3 get their coordinates based on the position of Div 1

function placeDivs() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var startPlacement = document.getElementById('div1');
  var divCoordinates = startPlacement.getBoundingClientRect();
  var percentageToMove = windowWidth * sliderX;
  var div1CoordinatesToCSS = percentageToMove + "px";
  startPlacement.style.left = div1CoordinatesToCSS;
  // startPlacement.style.top = "150px";
  // startPlacement.style.width = "200px";

  var secondDiv = document.getElementById("div2");
  var secondDivCoordinates = secondDiv.getBoundingClientRect();
  var firstDivRightEdge = windowWidth - (divCoordinates.right);
  var secondDivX = divCoordinates.right + (firstDivRightEdge / 2);
  // console.log(secondDivX);
  var secondDivXToCss = secondDivX + "px";
  secondDiv.style.left = secondDivXToCss;
  // secondDiv.style.width = "300px";
  // secondDiv.style.height = "200px";

  var thirdDiv = document.getElementById("div3");
  var secondDivLeftEdge = (secondDivCoordinates.left);
  var thirdDivX = secondDivCoordinates.left / 2;
  //  console.log(secondDivX);
  var thirdDivXToCss = thirdDivX + "px";
  thirdDiv.style.left = thirdDivXToCss;
  // secondDiv.style.width = "300px";
  // secondDiv.style.height = "200px";
}


// This function checks if one div is on top of another div
// It gives the option to change the positions of the divs if they overlap
function collision() {
  var collisionBoolean = false;
  var xyA = false;
  var xyB = false;
  var xyC = false;
  var xyD = false;
  for (i = 1; i < 4; i++) { // This for loop checks where the divs are on the screen and saves the coordinates of the four corners to variables
    //  var grabDiv = "div" + i;
    //  console.log(grabDiv);
    var firstDiv = document.getElementById("div" + i);
    //console.log("i: " + i);
    //console.log(firstDiv);
    var firstDivCoordinates = document.getElementById("div" + i).getBoundingClientRect();
    //console.log(firstDivCoordinates);
    var xA = firstDivCoordinates.x;
    //console.log("xA " + xA);
    var yA = firstDivCoordinates.y;
    //console.log("yA " + yA);
    var xB = firstDivCoordinates.x + firstDivCoordinates.width;
    var yB = firstDivCoordinates.y;
    var xC = xB;
    var yC = firstDivCoordinates.y + firstDivCoordinates.height;
    var xD = firstDivCoordinates.x;
    var yD = yC;
    var x1Width = firstDivCoordinates.x + firstDivCoordinates.width;
    var y1Height = firstDivCoordinates.y + firstDivCoordinates.height;

    for (j = 1; j < 4; j++) { // This for loop checks each div to see if it is on top of one of the other divs
      if (i === j) {
        //    console.log("same!");
      } else {

        //      console.log("checking " + i + " against " + j);
        var nextDivCounter = j;
        var secondDiv = document.getElementById('div' + nextDivCounter);
        //      console.log("secondDiv: " + secondDiv);
        var secondDivCoordinates = secondDiv.getBoundingClientRect();
        //      console.log(secondDivCoordinates.x);
        //      console.log(secondDivCoordinates.y);
        //      console.log(secondDivCoordinates.width);
        //      console.log(secondDivCoordinates.height);
        var x2 = secondDivCoordinates.x;
        var y2 = secondDivCoordinates.y;
        var x2Width = secondDivCoordinates.x + secondDivCoordinates.width;
        var y2Height = secondDivCoordinates.y + secondDivCoordinates.height;

        if (xA > x2 && xA < x2Width && yA > y2 && yA < y2Height) {
          xyA = true;
          console.log("collision!");
        }
        if (xB > x2 && xB < x2Width && yB > y2 && yB < y2Height) {
          xyB = true;
          console.log("collision!");
        }
        if (xC > x2 && xC < x2Width && yC > y2 && yC < y2Height) {
          xyC = true;
          console.log("collision!");
        }
        if (xD > x2 && xD < x2Width && yD > y2 && yD < y2Height) {
          xyD = true;
          console.log("collision!");
        }
        if (xyA === true || xyB === true || xyC === true || xyD === true) {
          collisionBoolean = true;
        } else {
          console.log("free!");
          console.log(collisionBoolean);
          collisionBoolean = false;
        }
        //    console.log(secondDiv);

      }
    }

  }


}
