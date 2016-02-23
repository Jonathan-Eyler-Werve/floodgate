// content.js

if (window.mute === undefined) { window.mute = {} };

// EXAMPLE
// chrome.runtime.sendMessage({"foo-message": "message contents"});

$(function() {

  // initialize assets
  window.mute.addStylesheet("/assets/stylesheets/filterScout.css");
  window.mute.getUserID();

  // request settings
  window.mute.getSettings(); // stubbed for now

  // add active filter wordlists to mutelist array
  // window.mute.buildActiveWordLists();

  // start a loop that rechecks for unfiltered tweets on interval
  window.mute.filterIntervalID = window.setInterval(window.mute.runFilters, 500);

});


window.mute.runFilters = function () {

  // synced settings object has {key: boolean}, the local object has {key: array}
  // keys are the same

  var activeFilters = window.mute.settings.activeFilters

  // set number of filters
  window.mute.numberOfFilters = 0
  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      window.mute.numberOfFilters += 1;
    }
  });

  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      window.mute.tweetTriggerTextFilter(window.mute.allFilters[key]);
    }
  });

};


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {
      clearInterval(window.mute.filterIntervalID)
    };

  }
);