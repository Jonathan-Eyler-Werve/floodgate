// content.js

if (window.mute === undefined) { window.mute = {} };

chrome.runtime.sendMessage({"pageAction": "tutorial"});

$(function() {

  // quick start
  window.mute.getSettings();

  window.mute.runFilters();


  // initialize other assets
  window.mute.addStylesheet("/assets/stylesheets/filterScout.css");
  // window.mute.addStylesheet("/assets/vendor/foundation.min.css");
  window.mute.getUserID();

  // start a loop that rechecks for unfiltered tweets
  window.mute.filterIntervalID = window.setInterval(window.mute.runFilters, 250);

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {
      clearInterval(window.mute.filterIntervalID)
    };

  }
);
