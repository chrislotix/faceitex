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


function extractTextFromSpan() {
  for(var item of statsSpan) {
    extractedText.push(item.textContent.replace(/\s/g, ''));
  }
}


function getStatsFromExtractedText() {
  for(var element of extractedText) {
    statsArray.push(element.match(/[\d]*[\.]{0,1}[\d]+/g));
  }
}


function getAllStats() {
  for(var i = 0; i < statsArray.length; i++) {
    kills   += parseInt(statsArray[i][0]);
    assists += parseInt(statsArray[i][1]);
    deaths  += parseInt(statsArray[i][2]);
  }
}

function getKillDeathRatio() {
  return (kills/deaths).toFixed(2);
}

extractTextFromSpan();
getStatsFromExtractedText();
getAllStats();

var message = "K: " + kills + " " +
              "A: " + assists + " " +
              "D: " + deaths + " " +
              "K/D: " +  getKillDeathRatio();

// document.execCommand('copy');
// "searchText"
// var input = document.getElementsByName("searchText");
alert(message);

