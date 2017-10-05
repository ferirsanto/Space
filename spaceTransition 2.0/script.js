var divs;
var colors = ["blue", "red", "green", "black", "gray", "purple", "gold", "yellow", "pink", "silver", "bronze", "brown"];


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
    scatter();
    listener();
    resizeListener();
  // mouseMovement();
}


function scatter() {
    var collectDivs = document.getElementsByTagName('div');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    //  console.log(collectDivs);
    for (i = 0; i < collectDivs.length; i++) {
        var currentDivToPlace = collectDivs[i];
        var currentDivId = collectDivs[i].id;
        console.log("current ID");
        console.log(currentDivId);
        //  console.log(currentDivToPlace);
        randomX = Math.floor(Math.random() * windowWidth);
        randomY = Math.floor(Math.random() * windowHeight);
        //  console.log(currentDivToPlace.getBoundingClientRect());

        //  currentDivToPlace.className += " hej";
        var divs = document.getElementById(currentDivId);
        divs.style.backgroundColor = colors[i];
        divs.style.top = randomY + "px";
        divs.style.left = randomX + "px";
        divs.selected = false;
        divs.originalX = randomX;
        divs.originalY = randomY;
        console.log("original Y");
        console.log(divs.originalY);
        //  console.log(divs.selected);
    }
}

function mouseMovement() {
    var mousePositionListener = document.addEventListener("mousemove", (e) => {

            var mousePointerDiv = document.getElementById("mousePointer");
            console.log(mousePointerDiv);
            mousePointerDiv.style.top = e.screenY = "px";
            mousePointerDiv.style.left = e.screenX = "px";
            console.log(e.screenX, e.screenY);
        });
    }


    function listener() {
        var eventListener = document.addEventListener("mouseover", grabID);
    }

    function grabID(e) {
        var currentDivId = e.target.id;
        var currentDiv = e.target;
        console.log(currentDivId);
        console.log("original Y");
        console.log(e.target.originalY);
        console.log(e.target.selected);
    }

    function resizeListener() {
        var resizeClick = document.addEventListener("click", resize);
    }

    function resize(e) {
        console.log("clicked!");
        var divToResize = e.target;
        var clickedDiv = e.target.id;
        var divToManipulate = document.getElementById(clickedDiv);
        console.log(e.target.selected);
        console.log("originalY in resize");
        console.log(e.target.originalY);
        if (e.target.selected === false) {
            divToManipulate.style.position = "static";
            divToManipulate.style.margin = "2rem auto 2rem auto";
            divToManipulate.style.width = "90%";
            divToManipulate.style.height = "90vh";
            divToManipulate.className += " selectedDiv";
            divToManipulate.selected = true;
        } else {
            console.log("time to go back!");
            divToManipulate.style.position = "absolute";
            divToManipulate.style.width = "90px";
            divToManipulate.style.height = "90px";
            divToManipulate.style.top = e.target.originalY + "px";
            divToManipulate.style.left = e.target.originalX + "px";
            divToManipulate.classList.remove("selectedDiv");
            divToManipulate.selected = false;
        }
    }
