//
// Regex for extracting stats:
// (/[\d]*[\.]{0,1}[\d]+/g)
//
// extractedText.match((/[\d]*[\.]{0,1}[\d]+/g));
//
// TODO:
// [x] player objects
// [x] clean up the code
// [ ] storage
// [ ] copy to clipboard
//

var statsSpan = document.getElementsByClassName('tooltip button is-white is-small');
var extractedText = [];
var statsArray = [];
var kills   = 0;
var assists = 0;
var deaths  = 0;

//
// Extracts text from all the spans on profile page
//
function extractTextFromSpan() {
  for(var item of statsSpan) {
    extractedText.push(item.textContent.replace(/\s/g, ''));
  }
}

//
// Fills the stats with the KAD stats in array format [K,A,D,KD]
//
function getStatsFromExtractedText() {
  for(var element of extractedText) {
    statsArray.push(element.match(/[\d]*[\.]{0,1}[\d]+/g));
  }
}

//
// Assigns values to the variables from statsArray
// TODO: Replace the vars with player object
//
function getAllStats() {
  for(var i = 0; i < statsArray.length; i++) {
    kills   += parseInt(statsArray[i][0]);
    assists += parseInt(statsArray[i][1]);
    deaths  += parseInt(statsArray[i][2]);
  }
}

//
// Helper function to get the kill:death ratio.
// It will break when player objects are introduced
// and kill deaths variables are removed / replaced.
//
function getKillDeathRatio() {
  return (kills/deaths).toFixed(2);
}

function init() {
  extractTextFromSpan();
  getStatsFromExtractedText();
  getAllStats();
}

init();

var message = "K: " + kills + " " +
              "A: " + assists + " " +
              "D: " + deaths + " " +
              "K/D: " +  getKillDeathRatio();

// document.execCommand('copy');
// "searchText"
// var input = document.getElementsByName("searchText");
alert(message);

