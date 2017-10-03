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

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    showHiddenDivs();
  }
}

function showHiddenDivs() {

}
