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

});

// EXAMPLE
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//
//   }
// );
