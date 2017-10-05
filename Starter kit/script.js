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
}

var divList = document.getElementsByTagName('div');
var array = [].slice.call(divList, 0);
console.log(array[0]);

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    showHiddenDivs();
  }
}

function showHiddenDivs() {
  // document.getElementById('text1').style.visibility = 'visible';       Tester
  var rand = array[Math.floor(Math.random() * array.length)];
  var index = array.indexOf(rand);

    array.splice(index, 1);
    rand.style.visibility = 'visible';
    // console.log(rand);

}
