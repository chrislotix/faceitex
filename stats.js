//
// Regex for extracting stats:
// (/[\d]*[\.]{0,1}[\d]+/g)
//
// extractedText.match((/[\d]*[\.]{0,1}[\d]+/g));
//
// TODO: player objects, storage
//

var statsSpan = document.getElementsByClassName('tooltip button is-white is-small');
var extractedText = [];
var statsArray = [];
var kills   = 0;
var assists = 0;
var deaths  = 0;


for(var item of statsSpan) {
  extractedText.push(item.textContent.replace(/\s/g, ''));
}

for(var element of extractedText) {
  statsArray.push(element.match(/[\d]*[\.]{0,1}[\d]+/g));
}

for(var i = 0; i < statsArray.length; i++) {
  kills   += parseInt(statsArray[i][0]);
  assists += parseInt(statsArray[i][1]);
  deaths  += parseInt(statsArray[i][2]);
}

alert(
  "K:" + kills + "\n" +
  "A:" + assists + "\n" +
  "D:" + deaths + "\n" +
  "K/D:" + (kills/deaths).toFixed(2)
  );
