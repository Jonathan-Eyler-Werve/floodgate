// content.js

if (window.mute === undefined) { window.mute = {} };

$(function() {

  // quick start
  window.mute.getSettings();
  window.mute.runFilters();

  // initialize other assets
  window.mute.launchTutorial();
  window.mute.addStylesheet("/assets/stylesheets/twitter.css");
  window.mute.getUserID();

  // start a loop that rechecks for unfiltered stuff
  window.mute.filterIntervalID = window.setInterval(window.mute.runFilters, 250);

  chrome.extension.onMessage.addListener(
    function(message, sender, sendResponse) {
      console.log("message recieved:", message);
      if (message.status === "settings_updated") {
        window.mute.getSettings();
        window.mute.refreshFilters();
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
