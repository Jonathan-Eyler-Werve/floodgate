// content.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

$(function() {

  // quick start
  FG.getSettings();
  FG.runFilters();

  // initialize other assets
  FG.launchTutorial();
  FG.addStylesheet("/assets/stylesheets/twitter.css");
  FG.getUserID();

  // start a loop that rechecks for unfiltered stuff
  FG.filterIntervalID = window.setInterval(FG.runFilters, 250);

  chrome.extension.onMessage.addListener(
    function(message, sender, sendResponse) {
      console.log("message recieved:", message);
      if (message.status === "settings_updated") {
        FG.getSettings();
        FG.refreshFilters();
      }
    }
  );

});

// EXAMPLE
// chrome.extension.onMessage.addListener(
//   function(message, sender, sendResponse) {
//
//   }
// );


