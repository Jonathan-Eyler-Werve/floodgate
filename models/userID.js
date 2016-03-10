// getUserID.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

// returns userID, and generates one if it isn't set
FG.getUserID = function (target) {

  if ( FG.userID === undefined ) {

    // talks to chome.storage to retrieve or set userID
    chrome.storage.sync.get('userID', function(items) {
      var userID = items.userID;
      if (userID) {
        FG.userID = userID;
      } else {
        newUserID = FG.getRandomToken();
        chrome.storage.sync.set({userID: newUserID}, function() {
          FG.userID = newUserID;
        });
      }
    });

  }
  return FG.userID
}

FG.getRandomToken = function () {

    // a reasonably unique token generator
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    return hex
}