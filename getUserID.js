// getUserID.js

if (window.mute === undefined) { window.mute = {} };

// returns userID, and generates one if it isn't set
window.mute.getUserID = function (target) {

  if ( window.mute.userID === undefined ) {

    // talks to chome.storage to retrieve or set userID
    chrome.storage.sync.get('userID', function(items) {
      var userID = items.userID;

      if (userID) {
        window.mute.userID = userID;
      } else {
        newUserID = window.mute.getRandomToken();
        chrome.storage.sync.set({userID: newUserID}, function() {
          window.mute.userID = newUserID;
        });
      }
    });

  }
  return window.mute.userID
}

window.mute.getRandomToken = function () {

    // a reasonably unique token generator
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    return hex
}